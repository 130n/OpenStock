const LogoText = ({ className = "text-2xl font-bold" }: { className?: string }) => (
    <span className={className}>
        <span className="text-red-500">LeO</span>
        <span className="text-white">pe&apos;</span>
        <span className="text-red-500">N</span>
        <span className="text-white">&apos;Stock</span>
    </span>
);

export default LogoText;
