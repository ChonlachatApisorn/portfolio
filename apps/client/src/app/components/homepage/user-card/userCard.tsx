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
    <>
      {data.map((item: IUser) => (
        <div className="bg-white drop-shadow-xl border border-gray-50 rounded-xl max-w-sm min-w-[384px] h-44 m-12">
          <div className="flex justify-end -mt-10 mr-5">
            {item.profile_image ? (
              <img
                className="rounded-full border-2 border-white drop-shadow-lg w-16 h-16"
                src={item.profile_image}
                alt={item.username}
              />
            ) : (
              <img
                className="rounded-full border-2 border-white drop-shadow-lg w-16 h-16"
                src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                alt={item.username}
              />
            )}
          </div>
          <span className="text-sm pl-3">{item.username}</span>
          <p className="text-xs p-3">{item.bio}</p>
          <div className="flex justify-end mr-3">
            <a href="#">
              <div className="flex items-center justify-center rounded-lg text-[10px] bg-sky-500 text-white w-20 h-7">
                view profile
              </div>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default UserCard;
