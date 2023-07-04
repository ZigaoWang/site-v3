import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { FaExchangeAlt, FaGithub, FaDownload } from 'react-icons/fa'
import { FaCloudArrowDown} from "react-icons/fa6";
import Link from 'next/link'

const features = [
    {
        name: 'Download Instantly',
        description: 'Intergrated with web browsers, download videos with a single click',
        icon: FaCloudArrowDown,
    },
    {
        name: 'MP4 Format',
        description:
            'No more converting to MP4, we support it natively',
        icon: FaExchangeAlt,
    },
    {
        name: 'Open Source',
        description: 'Source code is released to the public',
        icon: FaGithub,
    },
]

export default function Projects() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600">The Best Video Downloader</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">LinkDown</p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                            {feature.name}
                                        <br />
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                                <Link href="https://github.com/LinkScapeOfficial/LinkDown"><button className="bg-black text-white rounded-md h-auto w-auto"><FaDownload className="w-7 h-7 mr-1.5"/>Download</button></Link>
                            </dl>
                        </div>
                    </div>
                    <img
                        src="https://cdn.linkscape.app/LinkDown_Sample.png"
                        alt="LinkDown Screenshot"
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        width={2432}
                        height={1442}
                    />
                </div>
            </div>
        </div>
    )
}