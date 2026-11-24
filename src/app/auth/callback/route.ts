import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const isPasswordReset = url.searchParams.get("next") === "/auth/reset-password";
  const redirectTo = new URL(
    isPasswordReset ? "/auth/reset-password" : "/user/dashboard",
    url.origin,
  );

  const code = url.searchParams.get("code");
  if (!code) {
    if (isPasswordReset) {
      redirectTo.searchParams.set("error", "invalid_reset_link");
    }

    return NextResponse.redirect(redirectTo);
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.exchangeCodeForSession(code);

  if (error || !data.user) {
    const failureRedirect = isPasswordReset
      ? redirectTo
      : new URL("/auth/login", url.origin);
    failureRedirect.searchParams.set(
      "error",
      isPasswordReset ? "invalid_reset_link" : "callback",
    );
    return NextResponse.redirect(failureRedirect);
  }

  if (url.searchParams.get("createProfile") === "1") {
    const metadata = data.user.user_metadata;
    const metadataName =
      typeof metadata.name === "string" && metadata.name.trim()
        ? metadata.name.trim()
        : typeof metadata.full_name === "string" && metadata.full_name.trim()
          ? metadata.full_name.trim()
          : undefined;
    const email = data.user.email;
    const name = metadataName ?? email?.split("@")[0];

    if (email && name) {
      const { error: profileError } = await supabase
        .from("user_details")
        .upsert(
          [
            {
              auth_uid: data.user.id,
              name,
              email,
              onGoingProcess: false,
            },
          ] as never,
          { onConflict: "auth_uid", ignoreDuplicates: true },
        );

      if (profileError) {
        console.error("User profile insert error:", {
          code: profileError.code,
          message: profileError.message,
          details: profileError.details,
          hint: profileError.hint,
        });
        const failureRedirect = new URL("/auth/login", url.origin);
        failureRedirect.searchParams.set("error", "profile_save");
        return NextResponse.redirect(failureRedirect);
      }
    } else {
      const failureRedirect = new URL("/auth/login", url.origin);
      failureRedirect.searchParams.set("error", "profile_save");
      return NextResponse.redirect(failureRedirect);
    }
  }

  return NextResponse.redirect(redirectTo);
}