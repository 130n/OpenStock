const LogoText = ({ className = "text-2xl font-bold" }: { className?: string }) => (
    <span className={className}>
        <span className="text-red-500">Le</span>
        <span className="text-white"> </span>
        <span className="text-red-500">O</span>
        <span className="text-white">pe</span>
        <span className="text-red-500">n</span>
        <span className="text-white"> Sto</span>
        <span className="text-blue-500">que</span>
    </span>
);

export default LogoText;
