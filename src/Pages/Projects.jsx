import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TwinTower from "../../public/assets/tt.png";
import VolunteerLagbe from "../../public/assets/vl.png";
import ERC from "../../public/assets/erc.png";
import { Eye, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <h1 className="text-center font-bold text-4xl">Projects</h1>
      <div className="w-3/4 mt-20 grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
        <Card className="w-[350px]">
          <CardHeader>
            <img
              className="mb-3 rounded-lg hover:scale-105 hover:transition-transform hover:duration-200 hover:ease-in hover:rounded-lg"
              src={TwinTower}
              alt=""
            />
            <CardTitle>Twin Tower</CardTitle>
            <CardDescription>Bulding Management System.</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-around">
            <Link to={"https://twin-tower-6afee.web.app"}>
              <Button variant="ghost">
                <Eye />
              </Button>
            </Link>
            <Link to={"https://github.com/Aosaf098/Twin-Tower-Client"}>
              <Button variant="ghost">
                <Github />
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="w-[350px]">
          <CardHeader>
            <img
              className="mb-3 rounded-lg hover:scale-105 hover:transition-transform hover:duration-200 hover:ease-in hover:rounded-lg"
              src={VolunteerLagbe}
              alt=""
            />
            <CardTitle>Volunteer Lagbe</CardTitle>
            <CardDescription>Volunteer Recruiting System.</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-around">
            <Link to={"https://volunteer-lagbe-a4b61.web.app"}>
              <Button variant="ghost">
                <Eye />
              </Button>
            </Link>
            <Link to={"https://github.com/Aosaf098/Volunteer-Lagbe-Client"}>
              <Button variant="ghost">
                <Github />
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="w-[350px]">
          <CardHeader>
            <img
              className="mb-3 rounded-lg hover:scale-105 hover:transition-transform hover:duration-200 hover:ease-in hover:rounded-lg"
              src={ERC}
              alt=""
            />
            <CardTitle>Esports Review Central</CardTitle>
            <CardDescription>Video Game Review Website.</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-around">
            <Link to={"https://esports-review-central.web.app"}>
              <Button variant="ghost">
                <Eye />
              </Button>
            </Link>
            <Link to={"https://github.com/Aosaf098/ERC-Client"}>
              <Button variant="ghost">
                <Github />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Projects;
