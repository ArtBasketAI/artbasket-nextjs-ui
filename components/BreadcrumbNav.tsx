// components/BreadcrumbNav.tsx
import Link from 'next/link';
import React from 'react';

interface Breadcrumb {
    label: string;
    href: string;
}

interface BreadcrumbNavProps {
    breadcrumbs: Breadcrumb[];
}

const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ breadcrumbs }) => {
    return (
        <>
            {breadcrumbs.map((breadcrumb, index) => (
                <React.Fragment key={index}>
                    <Link href={breadcrumb.href} passHref>
                        <span className="text-white font-bold cursor-pointer">{breadcrumb.label}</span>
                    </Link>
                    {index < breadcrumbs.length - 1 && <span className="text-white"> &gt; </span>}
                </React.Fragment>
            ))}
        </>
    );
};

export default BreadcrumbNav;
