import Sidebar from "@/components/sidebaradmin";
import Navbar from "@/components/navbar";
import Card from "@/components/card";
import { Users, Mail, XCircle, SquareCheck, ClipboardClock } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
         {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Top Cards */}
          <div className="grid grid-cols-5 gap-4">
            <div className="bg-blue-100 p-4 rounded-xl shadow flex items-center justify-between">
              <div>
                <p className="text-gray-700 text-sm">Total Employee</p>
                <h3 className="text-2xl font-bold">500</h3>
              </div>
              <Users className="w-6 h-6 text-blue-600" />
            </div>

            <div className="bg-purple-100 p-4 rounded-xl shadow flex items-center justify-between">
              <div>
                <p className="text-gray-700 text-sm">On Time</p>
                <h3 className="text-2xl font-bold">330</h3>
              </div>
              <SquareCheck className="w-6 h-6 text-purple-600" />
            </div>

            <div className="bg-yellow-100 p-4 rounded-xl shadow flex items-center justify-between">
              <div>
                <p className="text-gray-700 text-sm">Late</p>
                <h3 className="text-2xl font-bold">70</h3>
              </div>
              <ClipboardClock className="w-6 h-6 text-yellow-600" />
            </div>

            <div className="bg-green-100 p-4 rounded-xl shadow flex items-center justify-between">
              <div>
                <p className="text-gray-700 text-sm">Leave/Sick</p>
                <h3 className="text-2xl font-bold">95</h3>
              </div>
              <Mail className="w-6 h-6 text-green-600" />
            </div>

            <div className="bg-red-100 p-4 rounded-xl shadow flex items-center justify-between">
              <div>
                <p className="text-gray-700 text-sm">Alpha</p>
                <h3 className="text-2xl font-bold">5</h3>
              </div>
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
          </div>
          </div>

        {/* Data Tables */}
        <div className="grid grid-cols-4 gap-4 p-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <h4 className="font-bold mb-2">Employee Data Entry</h4>
            <ol className="text-sm space-y-1">
              <li>1 Leslie Alexander</li>
              <li>2 Annette Black</li>
              <li>3 Esther Howard</li>
              <li>4 Devon Lane</li>
              <li>5 Wade Warren</li>
            </ol>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h4 className="font-bold mb-2">Employee Data Leave/Sick</h4>
            <ol className="text-sm space-y-1">
              <li>1 Leslie Alexander</li>
              <li>2 Annette Black</li>
              <li>3 Esther Howard</li>
              <li>4 Devon Lane</li>
            </ol>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h4 className="font-bold mb-2">Employee Data Alpha</h4>
            <ol className="text-sm space-y-1">
              <li>1 Leslie Alexander</li>
              <li>2 Annette Black</li>
              <li>3 Esther Howard</li>
              <li>4 Devon Lane</li>
            </ol>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h4 className="font-bold mb-2">Employee Data Late</h4>
            <ol className="text-sm space-y-1">
              <li>1 Leslie Alexander</li>
              <li>2 Annette Black</li>
              <li>3 Esther Howard</li>
              <li>4 Devon Lane</li>
            </ol>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="p-6">
          <div className="bg-white h-48 rounded-xl shadow flex items-center justify-center text-gray-400">
           
          </div>
        </div>
      </div>
    </div>
  );
}
