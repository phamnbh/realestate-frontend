"use client";
import { useState } from "react";

const description = `Welcome to this light-filled, inviting home in one of the best locations in the Stonegate Village community. Meander along the lushly landscaped walkway to this popular, rarely on the market, Plan 2 in the Santa Maria neighborhood. An expansive great room exudes comfort and style, perfect for gatherings and features wood flooring, custom plantation shutters, and access to a private atrium with a convenient gas stub for a BBQ hook-up. The kitchen has granite countertops, a large center island with dual sinks, crisp white cabinetry and ample storage. Additional features include under-cabinet lighting, stainless steel appliances including gas stove with hood, built-in microwave, dishwasher with stainless steel interior and a refrigerator. The main floor hallway leads to a powder room with access to extensive storage space under the stairs. Upstairs you’ll be greeted by brand new carpet and an ideal office area featuring a large light enhancing window with custom shutters, a built-in desk, storage shelves, and a file cabinet. The upper hall offers a full bank of storage cabinets and a closet housing a full-size stackable washer and dryer. The home features two primary bedrooms for ultimate privacy and comfort. The junior suite includes lots of windows, a ceiling fan, built-in TV and a shower/tub in the bathroom. The primary suite has a coffered ceiling, ceiling fan, and a walk-in closet with a window and beautiful dark wood closet organizers. The primary bath boasts a large relaxing soaking tub with an exterior window, a walk-in shower with clear glass surrounds, a vanity with dual sinks, and a separate privacy commode room. The oversized garage boasts epoxy flooring, a workstation with drawers, a large custom storage cabinet and a window for extra light. It also includes an electric vehicle charging outlet, a tank-less water heater and a whole-house water softener. Located in the prestigious Irvine Village of Stonegate, this home offers fantastic access to parks, the Jeffrey Walking Trail, and Woodbury Town Center for shops, restaurants, groceries, and entertainment. Conveniently close to freeways and toll roads, this home is at the heart of Orange County, surrounded by top-rated schools. Experience the best of Irvine living in this move-in ready and welcoming home!`;

const TogglableDescription = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const getSplitIndex = (text, charCount) => {
    if (text.length <= charCount) {
      return text.length;
    }
    let splitIndex = charCount;
    while (splitIndex > 0 && text[splitIndex] !== " ") {
      splitIndex--;
    }
    return splitIndex === 0 ? charCount : splitIndex;
  };

  const splitIndex = getSplitIndex(description, 300);
  const firstPart = description.slice(0, splitIndex).trim();
  const secondPart = description.slice(splitIndex).trim();

  return (
    <div className="p-4 text-gray-800">
      <p>
        {firstPart}
        {showMore && <span>{` ${secondPart}`}</span>}
        {!showMore && <span>...</span>}
      </p>
      <button
        onClick={toggleShowMore}
        className="mt-2 text-teal-600 focus:outline-none"
      >
        Show {showMore ? "less" : "more"}
      </button>
    </div>
  );
};

export default TogglableDescription;
