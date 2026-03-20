import Link from "next/link"


export function Footer() {
    return (
        <footer className="border-t border-white/5 px-6 py-8">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
                <span className="text-lg font-bold text-white">RepoLens</span>
                <div className="flex gap-6 text-sm text-slate-500">
                    <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                    <Link href="#" className="hover:text-white transition-colors">Documentation</Link>
                </div>
                <p className="text-xs text-slate-600">
                    © 2026 RepoLens Intelligence. Built for the open source community.
                </p>
            </div>
        </footer>
    )
}

export default Footer