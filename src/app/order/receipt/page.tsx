"use client";

import Link from "next/link";
import Layout from '../../components/layout';

const Receipt = () => {
    return (
            <Layout>
            <div>
                <h1>Here is your receipt</h1>
                <Link href="/">Here will be a text about the website</Link>
            </div>
            </Layout>
    );
};

export default Receipt;