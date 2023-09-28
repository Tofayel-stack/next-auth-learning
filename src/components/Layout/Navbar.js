import { Layout, Menu, Button } from "antd";
const { Header } = Layout;
import Link from "next/link";
import { useSession, signOut } from "next-auth/react"
import auth from "@/firebase/firebase.auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {

  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  const { data: session } = useSession()

  console.log(session);


  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="demo-logo">
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "25px",
          }}
        >
          NEXT AUTH
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          width: "20%",
          display: "flex",
          fontSize: "20px",
          justifyContent: "space-between",
        }}
      >
        <items style={{color:"red",fontSize:"12px"}}>Signed in as {session?.user?.email || user?.email}</items>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          href="/profile"
        >
          <items>Profile</items>
        </Link>

      
      
        {
        session?.user?
    
        <items>
          <Button type="primary" danger onClick={() => signOut()}> 
            Logout
          </Button>
        </items>

          :

          <Link style={{ textDecoration: "none", color: "white" }} href="/login">
          <items>Login</items>
          </Link>

        }

      </Menu>
    </Header>
  );
};
export default Navbar;
