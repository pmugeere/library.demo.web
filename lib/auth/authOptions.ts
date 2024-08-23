import { NextAuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions: NextAuthOptions = {
    providers: [
        KeycloakProvider({
            clientId: process.env.KEYCLOAK_ID as string,
            clientSecret: process.env.KEYCLOAK_SECRET as string,
            issuer: process.env.KEYCLOAK_ISSUER,
            authorization: {
                params: {
                    scope: "openid email profile",
                    response_type: "code",
                    redirect_uri: process.env.KEYCLOAK_REDIRECT_URI as string,
                },
               // url : process.env.KEYCLOAK_AUTHORIZATION_URL as string 
            },
        }),
    ],
    callbacks: {
        async jwt({ token, account, profile }) {
            if (account) {
                token.accessToken = account.access_token;
                token.id = profile?.id;
            }
            return token;
        },
        async session({ session,token}) {
            if (token) {
                session.user.id = token.sub as string;
                session.accessToken = token.accessToken as string;
            }
            return session; 
        },
    },
    session: {
        strategy: "jwt",
        maxAge: 0 * 0 * 5 * 60, // 5 minutes for testing
    },
    secret: process.env.NEXTAUTH_SECRET
};