import AppLayout from "../AppLayout";
import CreateSpaceForm from "../component/CreateSpaceForm";
import ShopSpaces from "../component/ShopSpaces";
import RentalSpaces from "../component/ShopSpaces";
import UpdateSpaceForm from "../component/UpdateSpaceForm";




export const ROUTING_PATH = [
    {

        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<ShopSpaces />
            },
            {
                path:"/create-space",
                element:<CreateSpaceForm />
            },
            {
                path:"/update-space/:spaceId",
                element:<UpdateSpaceForm />
            }
        ]

    }
]