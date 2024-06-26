import { CgProfile } from "react-icons/cg";
import { FaBook } from "react-icons/fa";
import { IoList } from "react-icons/io5";
import { Link } from "react-router-dom";
import { PiStudentBold } from "react-icons/pi";
import { Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import { TbStarsFilled } from "react-icons/tb";

export const SideNav = () => {
  const { user } = useSelector((state) => state.userInfo);

  const sideLinks = [
    {
      icon: <FaBook />,
      title: "Books",
      to: "/admin/books",
      isAdminOnly: true,
    },
    {
      icon: <PiStudentBold />,
      title: "Students",
      to: "/admin/students",
      isAdminOnly: true,
    },
    {
      icon: <IoList />,
      title: "All Burrow",
      to: "/admin/all-burrows",
      isAdminOnly: true,
    },
    {
      icon: <TbStarsFilled />,
      title: "Reviews",
      to: "/admin/reviews",
      isAdminOnly: true,
    },
    {
      icon: <FaBook />,
      title: "My Books",
      to: "/my-books",
    },
    {
      icon: <CgProfile />,
      title: "Profile",
      to: "/profile",
    },
  ];

  const list =
    user.role === "admin"
      ? sideLinks.map((item) => item)
      : sideLinks.filter((item) => !item.isAdminOnly);

  return (
    <Stack gap={1}>
      {list.map(({ to, title, icon }, index) => (
        <Link to={to} key={index} className="p-2 nav-link">
          {icon} {title}
        </Link>
      ))}
    </Stack>
  );
};
