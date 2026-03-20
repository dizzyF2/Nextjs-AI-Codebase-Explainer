

export function isValidGithubUrl(url: string): boolean {
    const pattern =
        /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+(\/.*)?$/;
    return pattern.test(url) || /^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/.test(url);
}

export const EXAMPLE_REPOS = [
    "vercel/next.js",
    "facebook/react",
    "supabase/supabase",
];