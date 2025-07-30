import { auth } from '~/lib/auth';

export default defineEventHandler(async (event) => {
    if (event.path.startsWith('/dashboard')) {
        const session = await auth.api.getSession(event);
        if (!session?.user) {
            return sendRedirect(event, '/');
        }
    }
});
