import React, { useLayoutEffect } from "react";
import { Gallery } from "react-grid-gallery";

const images = [
  {
    src: "https://tastythriftytimely.com/wp-content/uploads/2023/06/Falafel-Pita-1.jpg",
    width: 350,
    height: 450,
    id: 1,
  },
  {
    src: "https://www.allrecipes.com/thmb/7W5LnKp7zVh-tHZ1CufFzAzxAvw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/232962-super-easy-hummus-ddmfs-3X4-0314-7a98966c532646769f91a51812e50e41.jpg",
    width: 250,
    height: 212,
    id: 2,
  },
  {
    src: "https://www.myjewishlearning.com/wp-content/uploads/2020/03/sabich-ed-fi.jpg",
    width: 320,
    height: 212,
    id: 3,
  },
  {
    src: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/12/Shakshuka-main-1.jpg",
    width: 320,
    height: 174,
    id: 4,
  },
  {
    src: "https://assets-prd.punchdrink.com/wp-content/uploads/2013/09/Gimlet.jpg",
    width: 180,
    height: 212,
    id: 5,
  },
  {
    src: "https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-417817.jpg?t=1708272478418",
    width: 300,
    height: 212,
    id: 6,
  },
  {
    src: "https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-418099.jpg?t=1712995563951",
    width: 320,
    height: 252,
    id: 7,
  },
  {
    src: "https://shef.com/homemade-food/wp-content/uploads/Middle-eastern-food-hummus-pita-tabbouleh-feta-scaled-e1662414276318.jpeg",
    width: 320,
    height: 212,
    id: 8,
  },
  {
    src: "https://cdn.vox-cdn.com/thumbor/-iWK1gT5wEAkCq9WtDWPRaRB_qY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24276104/shutterstock_777833698.jpg",
    width: 350,
    height: 212,
    id: 9,
  },
  {
    src: "https://scontent.cdninstagram.com/v/t39.30808-6/384766761_17955115952661197_4766814823774558015_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=nvjKS2cS9b4Q7kNvgECe1-K&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzIwMTg3NjQ3OTA2Mjc0Nzg5MQ%3D%3D.2-ccb7-5&oh=00_AYCjyNbt3TSrGGuuiKVh1yU5a9RgIwNFoL5gRBzSneGuLw&oe=66638172&_nc_sid=10d13b",
    width: 250,
    height: 212,
    id: 11,
  },
  {
    src: "https://static.wixstatic.com/media/055fdf_500a76dfbe4e45f086dadebf5e42482f~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/055fdf_500a76dfbe4e45f086dadebf5e42482f~mv2.jpg",
    width: 450,
    height: 312,
    id: 10,
  },
];

export const ShalomInside = ({ currentStep, setCurrentStep }) => {
  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleSelect = (index, item, event) => {
    if (item.id === 5) {
      setCurrentStep(5);
      localStorage.setItem("currentStep", Number(currentStep));
    }
  };

  return (
    <div>
      <h3>
        Shalom, hatulyatko 😏
        <span
          onClick={() => {
            setCurrentStep(3);
            localStorage.setItem("currentStep", Number(currentStep));
          }}
        >
          ❤️
        </span>
      </h3>
      <Gallery images={images} onClick={handleSelect} />
    </div>
  );
};
