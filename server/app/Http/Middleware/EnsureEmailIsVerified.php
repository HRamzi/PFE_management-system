<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureEmailIsVerified
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */

    public function handle(Request $request, Closure $next, string $role): Response
    {
        // Check if user is authenticated
        if (! $request->user()) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        // Check if email is verified (if the user must verify email)
        if ($request->user() instanceof MustVerifyEmail && ! $request->user()->hasVerifiedEmail()) {
            return response()->json(['message' => 'Your email address is not verified.'], 409);
        }

        // If all checks pass, allow the request to proceed
        return $next($request);
    }
}
