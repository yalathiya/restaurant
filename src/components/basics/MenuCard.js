import React from "react";

const MenuCard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, description } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />

                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
// import React from "react";

// const MenuCard = ({ menuData }) => {
//   //console.log(menuData );
//   return (
//     <>
//       {menuData.map((curEle) => {
//         return (
//           <>
//             <div className="card-container">
//               <div className="card">
//                 <div className="card-body">
//                   <span className="card-number card-circle subtle">
//                     {curEle.id}
//                   </span>
//                   <span className="card-author subtle">{curEle.category}</span>
//                   <h2 className="card-title">{curEle.name}</h2>
//                   <span className="card-description subtle">
//                     {curEle.description}
//                   </span>
//                   <div className="card-read">Read</div>
//                 </div>

//                 <img className="card-media" src={curEle.image}></img>
//                 <span className="card-tag subtle">Order Now</span>
//               </div>
//             </div>
//           </>
//         );
//       })}
//     </>
//   );
// };

// export default MenuCard;
