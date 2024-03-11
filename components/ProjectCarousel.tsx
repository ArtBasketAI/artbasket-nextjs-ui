// components/ProjectCarousel.tsx
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectTile from './ProjectTile';

const ProjectCarousel = ({ title, projects }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        className: "project-carousel",
        responsive: [
            {
                breakpoint: 1024, // Breakpoint for large screens (e.g., desktops)
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768, // Breakpoint for medium screens (e.g., tablets)
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 640, // Breakpoint for small screens (e.g., mobile phones)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <div key={index} className="px-2">
                        <ProjectTile project={project} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProjectCarousel;
