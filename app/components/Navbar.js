import Image from "next/image"
export default function Navbar(){
    return(
        <div>
            <nav>
                <div className="flex justify-between p-2 shadow-lg shadow-gray-500 text-center">
                    <div className="flex items-center gap-3">
                    <Image src="/images/JSXU5140.JPG" width={50} height={50} className="rounded-full"/>
                    <h1 className="">Women Online Univercity</h1>
                    </div>
                    <div className="flex items-center gap-6">
                    <a href="/home" className="hover:text-orange-400">Home</a>
                    <a href="/about" className="hover:text-orange-400">About</a>
                    <a href="/faculties" className="hover:text-orange-400">Faculties</a>
                    <a href="/teachers" className="hover:text-orange-400">Teachers</a>
                    <a href="/announcements" className="hover:text-orange-400">Announcements</a>
                    <a href="/contact" className="hover:text-orange-400">Contact</a>
                    <a href="/student/login" className="bg-orange-500 rounded-2xl p-2 text-white">Student Portal</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}