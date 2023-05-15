import Nav from "react-bootstrap/Nav";
import { NavigationPath } from "../../models/navigation_path";
import { useState } from "react";

interface Props {
  navigationPaths: NavigationPath[];
}

function SideNav({ navigationPaths }: Props) {
  const defaultNavIndex = 0;
  const [currentIndex, setCurrentIndex] = useState<number>(defaultNavIndex);

  const handleNavigateRoute = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      {navigationPaths.map((navigationPath, index) => {
        const { title, path } = navigationPath;

        return (
          <Nav.Link
            key={title}
            className={`${navigationPaths[currentIndex].path === path && "active"}`}
            onClick={() => handleNavigateRoute(index)}
          >
            {title}
          </Nav.Link>
        );
      })}
    </Nav>
  );
}

export default SideNav;
