import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useRouter } from "next/router";
import { getCareerList } from "@src/actions/general-actions";

const Select2 = () => {
  const router = useRouter();
  const [selected, setSelected] = useState("");
  const [careerList, setCareerList] = useState([]);

  useEffect(() => {
    getCareerList().then(res => {
      let uniqueList = {};
      for (let i = 0; i < res.length; i++) {
        if (!uniqueList[res[i].careerCategory]) {
          uniqueList[res[i].careerCategory] = [];
        }

        uniqueList[res[i].careerCategory].push({
          label: res[i].title,
          value: res[i].slug
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
      setCareerList(finalList);
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
    setSelected(selectedOption);
    router.push("/career/[name]", `/career/${selectedOption.value}`);
  };

  return (
    <Select
      onChange={handleChange}
      options={careerList}
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

export default Select2;
