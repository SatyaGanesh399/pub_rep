import React, { useState, useEffect } from "react";
import Select from "react-select";
import { getBlogList } from "@src/actions/general-actions";

const Select3 = ({ setCategory }) => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    getBlogList().then(res => {
      let uniqueList = {};
      for (let i = 0; i < res.length; i++) {
        if (!uniqueList[res[i].category]) {
          uniqueList[res[i].category] = [];
        }

        uniqueList[res[i].category].push({
          label: res[i].category,
          value: res[i].category
        });
      }

      const finalList = [];
      for (let [category, options] of Object.entries(uniqueList)) {
        let obj = {
          label: category,
          options: options
        };
        finalList.push(obj);
      }
      setBlogList(finalList);
    });
  }, []);

  const customStyles = {
    control: base => ({
      ...base,
      height: 44
    }),
    menuList: base => ({
      ...base,
      height: 200
    })
  };

  const handleChange = selectedOption => {
    setCategory(selectedOption.value);
  };

  return (
    <Select
      onChange={handleChange}
      options={blogList}
      theme={theme => ({
        ...theme,
        borderRadius: 8,
        colors: {
          ...theme.colors,
          text: "#212121",
          primary25: "#ffe7e1",
          primary: "#ef7e5c"
        }
      })}
      styles={customStyles}
      placeholder="Type to Search"
    />
  );
};

export default Select3;
