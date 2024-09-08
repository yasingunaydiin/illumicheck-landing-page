import Image from 'next/image';
import GithubIcon from '../assets/icons/github_logo.png';

export const Navbar = () => {
    return (
        <div className="relative py-4"> {/* Added relative positioning */}
            <div className="container">
                <a
                    href="https://github.com/yasingunaydiin/Illumicheck"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4" // Position in the top right corner
                >
                    <Image src={GithubIcon} alt="Github Icon" className="h-8 w-auto"/>
                </a>
                {/* Add other Navbar content here if needed */}
            </div>
        </div>
    );
};
