import Link from 'next/link';

export const NavBar: React.FC = () => {
    return (
        <nav style={{ padding: '10px', background: '#f0f0f0', marginBottom: '20px' }}>
            <Link href="/dashboard">Dashboard</Link>
            <span style={{ marginRight: '10px' }} /> {/* Use spans for spacing if needed */}
            <Link href="/create_project">Create Project</Link>
            {/* Ensure there's spacing or separators as needed */}
        </nav>
    );
};
