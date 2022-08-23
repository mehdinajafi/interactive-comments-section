import { authPages } from "constant";
import { withAuth } from "next-auth/middleware";
import type { NextRequest } from "next/server";

export default withAuth(function middleware(request: NextRequest) {}, {
  pages: authPages,
});

export const config = { matcher: ["/"] };
