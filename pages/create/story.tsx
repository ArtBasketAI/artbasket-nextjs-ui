import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

const StoryCreate = () => {
    const router = useRouter();
    const { title } = router.query; // Access the project title from the query
    return (
                <>
            <Navbar
                breadcrumbs={[
                    { label: 'Dashboard', href: '/dashboard' },
                    { label: title as string, href: `/create/story?title=${title}` },
                ]}
            />
        
        <div className="p-8">
            <h1>{title}</h1>
            <h2 className="text-2xl font-bold mb-8">Create a Story</h2>
            <p className="text-lg">This feature is currently in development and coming soon!</p>
        </div>
        </>
    );
};

export default StoryCreate;
