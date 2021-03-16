import * as React from "react";
import { ageMap, testList } from "./data/index";
import Dialog from "./Dialog";
import "./style/content.less";

type FormElem = React.FormEvent<HTMLFormElement>;
interface ListProps {
  name: string;
  age: string;
  work: string;
}
interface SelectProps {
  label: string;
  value: number;
}

const Content: React.FC = () => {
  const [name, setName] = React.useState<string>("");
  const [searchName, setSearchName] = React.useState<string>("");
  const [searchAge, setSearchAge] = React.useState<string>("");
  const [age, setAge] = React.useState<string>("");
  const [work, setWork] = React.useState<string>("");
  const [isAdd, setIsAdd] = React.useState<boolean>(false);
  const [isEdit, setIsEdit] = React.useState<boolean>(false);
  const [editIndex, setEditIndex] = React.useState<number>();
  const [list, setList] = React.useState<ListProps[]>(testList);
  const [storeList, setStoreList] = React.useState<ListProps[]>(testList);

  //增加
  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    setName("");
    setAge("");
    setWork("");
    addNewList({
      name,
      age,
      work,
    });
  };
  const addNewList = (param: ListProps): void => {
    const res: ListProps[] = [...list, param];
    setList(res);
    setStoreList(res);
    setIsAdd(false);
  };

  //编辑
  const handleEditSubmit = (e: FormElem): void => {
    e.preventDefault();
    setIsEdit(true);
    editList({
      name,
      age,
      work,
    });
  };
  const editList = (param: ListProps): void => {
    const newLists: ListProps[] = list;
    newLists[editIndex] = param;
    setList([...newLists]);
    setStoreList([...newLists]);
    setName("");
    setAge("");
    setWork("");
    setIsEdit(false);
  };

  //删除
  const removeList = (index: number): void => {
    const newLists: ListProps[] = list;
    newLists.splice(index, 1);
    setList([...newLists]);
  };

  // 查询名字
  const handleSearchName = (text: string): void => {
    if (text === "") {
      setSearchName("");
      setList(storeList);
    } else {
      let newArr = list.filter((item) => item.name.includes(text));
      setList(newArr);
    }
  };

  //查询年龄
  const handleSearchAge = (): void => {
    setList(storeList);
    if (searchAge) {
      let newArr = storeList.filter(
        (item) =>
          +item.age <= +searchAge * 10 + 10 && +item.age >= +searchAge * 10
      );
      console.log("searchAge", typeof (+searchAge * 10));
      setList(newArr);
    }
  };

  return (
    <div className="root">
      <div className="header">
        <div>
          名字:
          <input
            type="text"
            className="search-item"
            id="value"
            placeholder="输入姓名"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            required
          />
          <button
            onClick={() => handleSearchName(searchName)}
            className="search-button"
          >
            查询
          </button>
          年龄:
          <select
            className="search-item"
            onChange={(e) => setSearchAge(e.target.value)}
          >
            {ageMap.map((item: SelectProps, index: number) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <button className="search-button" onClick={() => handleSearchAge()}>
            查询
          </button>
          <button onClick={() => handleSearchName("")}>重置</button>
        </div>
        <div>
          <button onClick={() => setIsAdd(true)}>新增</button>
        </div>
      </div>

      {isAdd && (
        <Dialog>
          <form role="form" onSubmit={handleSubmit}>
            <div className="input-from">
              名字:
              <input
                type="text"
                id="value"
                placeholder="输入姓名"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              年龄:
              <input
                type="text"
                id="value"
                placeholder="输入年龄"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
              职业:
              <input
                type="text"
                id="value"
                placeholder="输入职业"
                value={work}
                onChange={(e) => setWork(e.target.value)}
                required
              />
              <hr />
              <button type="submit" className="button">
                提交
              </button>
              <button
                onClick={() => {
                  setIsAdd(false);
                }}
              >
                关闭
              </button>
            </div>
          </form>
        </Dialog>
      )}
      {isEdit && (
        <Dialog>
          <form role="form" onSubmit={handleEditSubmit}>
            <div className="input-from">
              名字:
              <input
                type="text"
                id="value"
                placeholder="输入姓名"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              年龄:
              <input
                type="text"
                id="value"
                placeholder="输入年龄"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
              职业:
              <input
                type="text"
                id="value"
                placeholder="输入职业"
                value={work}
                onChange={(e) => setWork(e.target.value)}
                required
              />
              <hr />
              <button type="submit" className="button">
                提交
              </button>
              <button
                onClick={() => {
                  setIsEdit(false);
                }}
              >
                关闭
              </button>
            </div>
          </form>
        </Dialog>
      )}
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="table-title">姓名</th>
              <th className="table-title">年龄</th>
              <th className="table-title">职业</th>
              <th className="table-title">操作</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item: ListProps, index: number) => (
              <tr key={index} className="table-item">
                <td> {item.name}</td>
                <td> {item.age}</td>
                <td>{item.work}</td>
                <td>
                  <button
                    onClick={() => {
                      setIsEdit(true);
                      setEditIndex(index);
                    }}
                  >
                    编辑
                  </button>
                  &nbsp;
                  <button onClick={() => removeList(index)}>删除</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <table></table>
    </div>
  );
};
export default Content;
