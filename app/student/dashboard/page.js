"use client";
import {LayoutDashboard, User, GraduationCap, ClipboardList, Clock, Presentation, LogOut} from "lucide-react";

export default function Dashboard() {
	return (
		<main>
			<div>
				<header className="text-yellow-600 border border-yellow-400 shadow p-4">
					<h1 className="font-bold">Women Online Univercity</h1>
					</header>
					<div className="flex">
				<aside>
					<div className="bg-gray-800 w-64 min-h-screen p-5">
					<div className="flex gap-4 items-center">
						<img src="/images/JSXU5140.JPG" height={60} width={60} className="rounded-full mb-4"></img>
						</div>
						<ul className="text-white space-y-3 block p-3 rounded-lg">
						<li className="hover:bg-orange-300 hover:p-2 rounded  items-center "><a className="flex gap-3 transition" href="/student/dashboard/sidebar/dashboard"><LayoutDashboard size="20"/>Dashboard</a></li>
						<li className="hover:bg-orange-300 hover:p-2 rounded transition items-center "><a className="flex gap-3" href="/student/dashboard/sidebar/profile"><User size="20"/>My Profile</a></li>
						<li className="hover:bg-orange-300 hover:p-2 rounded transition items-center "><a className="flex gap-3" href="/student/dashboard/sidebar/grades"><GraduationCap size="20"/>My Grades</a></li>
						<li className="hover:bg-orange-300 hover:p-2 rounded transition items-center "><a className="flex gap-3" href="/student/dashboard/sidebar/homework"><ClipboardList size="20"/>Assignment</a></li>
						<li className="hover:bg-orange-300 hover:p-2 rounded transition items-center "><a className="flex gap-3" href="/student/dashboard/sidebar/schedule"><Clock size="20"/>Schedual</a></li>
						<li className="hover:bg-orange-300 hover:p-2 rounded transition items-center"><a className=" flex gap-3" href="/student/dashboard/sidebar/slids"><Presentation size="20"/>Slides</a></li>
						<li className="hover:bg-orange-300 hover:p-2 rounded transition items-center "><a className="flex gap-3" href="/student/dashboard/sidebar/logout"><LogOut size="20"/>Log Out</a></li>
						</ul>
					</div>
				</aside>
				
				 <section className="flex-1 p-6">
					<div className="bg-orange-100 p-5 rounded-xl mb-4">
                    <h2 className="text-2xl font-bold text-orange-400 ">Welcome back!</h2>
					<p className="text-gray-600 mt-2 ">Here is your academic overview.</p>
					</div>
                    <div className="flex gap-5">
						<div className="bg-gray-100 p-5 rounded-xl shadow flex-1">
						<h3>My Courses</h3>
						<p>6</p>
						</div>
						<div className="bg-gray-100 p-5 rounded-xl shadow flex-1">
						<h3>My Grades</h3>
						<p>85%</p>
						</div>
						<div className="bg-gray-100 p-5 rounded-xl shadow flex-1">
						<h3>GPA</h3>
						<p>3.5</p>
						</div>
					</div>
				 </section>
				</div>
			</div>
		</main>
	);
}
