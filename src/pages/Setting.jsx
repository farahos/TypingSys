import React from 'react'

const downloadCertificate = () => {
  // Logic to download the certificate
  const link = document.createElement('a');
  link.href = '/path/to/certificate.pdf';
  link.download = 'certificate.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
const logout = () => {
  // i need do you wanr to logout yes or no
  const confirmLogout = window.confirm("Do you really want to logout?");
  if (confirmLogout) {
    // Logic to log out the user
    localStorage.removeItem("token");
    window.location.href = "/login"; // Redirect to login page 
  }
}

const Setting = () => {
  return (

    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input type="text" className=" px-4 py-2 border rounded-lg" placeholder="Enter your Full Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" className="px-4 py-2 border rounded-lg" placeholder="Enter your email" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">Update Profile</button>
        </form>

        <h2 className="text-xl font-semibold mt-8 mb-4">Change Password</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Current Password</label>
            <input type="password" className=" px-4 py-2 border rounded-lg" placeholder="Enter your current password" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">New Password</label>
            <input type="password" className=" px-4 py-2 border rounded-lg" placeholder="Enter your new password" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">Change Password</button>
        </form>

        <h2 className="text-xl font-semibold mt-8 mb-4">Download Certificate</h2>
        <button onClick={downloadCertificate} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">Download Certificate</button>
        <h2 className="text-xl font-semibold mt-8 mb-4">Logout</h2>
        <button onClick={logout} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300">Logout</button>
      </div>

    </div>
  );
};

export default Setting;