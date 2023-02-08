import { useEffect, useState } from "react";
import { UserUrl } from "../../../provider/api.constant";
import { instant } from "../../../provider/axios.instant";
import { IUser } from "../../../provider/interface";

function UserCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    instant.get(UserUrl.find).then((res) => setData(res.data));
  }, []);

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4 w-screen">
        {data.map((item: IUser) => (
          <div className="flex flex-col justify-center items-center bg-zinc-800 rounded drop-shadow-xl w-52 h-64 m-20">
            <div className="">
              {item.profile_image ? (
                <img
                  className="rounded-full drop-shadow-xl w-16 h-16"
                  src={item.profile_image}
                  alt={item.username}
                />
              ) : (
                <img
                  className="rounded-full drop-shadow-xl w-16 h-16"
                  src="https://cdn-icons-png.flaticon.com/512/265/265674.png"
                  alt={item.username}
                />
              )}
            </div>
            <div className="mt-10">
              <span className="text-zinc-200 font-bold">{item.username}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserCard;

// {item.profile_image ? (
//   <img
//     className="rounded-full border-2 border-white drop-shadow-lg w-16 h-16"
//     src={item.profile_image}
//     alt={item.username}
//   />
// ) : (
//   <img
//     className="rounded-full border-2 border-white drop-shadow-lg w-16 h-16"
//     src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
//     alt={item.username}
//   />
// )}
