export default function Grades(){
    return(
        <div>
            <h2 className="text-center text-3xl font-bold text-orange-400 mb-4">My Grades</h2>
            <table className="w-full border-collapse">
                <thead className="text-left p-4 bg-orange-300 text-white ">
                    <tr>
                        <th className="border p-3">Course</th>
                        <th className="border p-3">Midterm</th>
                        <th className="border p-3">Final</th>
                        <th className="border p-3">Total</th>
                        <th className="border p-3">Grades</th>
                        <th className="border p-3">Teacher</th>
                    </tr>
                </thead>
                <tbody className="p-3 bg-yellow-50 text-gray-600">
                    <tr>
                        <td className="border p-3">نظام اخلاقی اسلام</td>
                        <td className="border p-3">18</td>
                        <td className="border p-3">56</td>
                        <td className="border p-3">76</td>
                        <td className="border p-3">B</td>
                        <td className="border p-3">zarmina</td>
                    </tr>
                    <tr>
                        <td className="border p-3">python</td>
                        <td className="border p-3">18</td>
                        <td className="border p-3">56</td>
                        <td className="border p-3">76</td>
                        <td className="border p-3">B</td>
                        <td className="border p-3">zarmina</td>
                    </tr>
                    <tr>
                        <td className="border p-3">نظام لجتماعی اسلام</td>
                        <td className="border p-3">18</td>
                        <td className="border p-3">56</td>
                        <td className="border p-3">76</td>
                        <td className="border p-3">B</td>
                        <td className="border p-3">zarmina</td>
                    </tr>
                    <tr>
                        <td className="border p-3">اساسات ذیتابیس</td>
                        <td className="border p-3">18</td>
                        <td className="border p-3">56</td>
                        <td className="border p-3">76</td>
                        <td className="border p-3">B</td>
                        <td className="border p-3">zarmina</td>
                    </tr>
                    <tr>
                        <td className="border p-3">معماری کمپیوتر</td>
                        <td className="border p-3">18</td>
                        <td className="border p-3">56</td>
                        <td className="border p-3">76</td>
                        <td className="border p-3">B</td>
                        <td className="border p-3">zarmina</td>
                    </tr>
                    <tr>
                        <td className="border p-3">اساسات شبکه</td>
                        <td className="border p-3">18</td>
                        <td className="border p-3">56</td>
                        <td className="border p-3">76</td>
                        <td className="border p-3">B</td>
                        <td className="border p-3">zarmina</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}