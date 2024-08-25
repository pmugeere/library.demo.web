// import NextAuth from "next-auth";
// import { authOptions } from "../../../../lib/auth/authOptions";

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import { handlers } from "../../../../lib/auth/authOptions"
export const { GET, POST } = handlers