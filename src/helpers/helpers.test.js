import { searchResult } from "./search.js";
import { sortResult } from "./sort.js";

test("searching substring in array", () => {
  expect(
    searchResult(
      [
        { a: "Lex", string2: { b: "Anna" }, c: "Andy" },
        { string1: "Andrew", string2: { string3: "Steve" }, string4: "Max" },
        { a: "Lex", string2: { b: "Steve" }, c: "Peter" }
      ],
      "An"
    )
  ).toStrictEqual([
    { a: "Lex", c: "Andy", string2: { b: "Anna" } },
    { string1: "Andrew", string2: { string3: "Steve" }, string4: "Max" }
  ]);
});

test("sorting array of objects by key", () => {
  expect(
    sortResult(
      [
        { a: 5, b: "Anna", c: "!2zadf" },
        { a: 2, b: "Lex", c: "!5135adf" },
        { a: 15, b: "Steve", c: "23512352zadf" }
      ],
      true,
      "a"
    )
  ).toStrictEqual([
    { a: 2, b: "Lex", c: "!5135adf" },
    { a: 5, b: "Anna", c: "!2zadf" },
    { a: 15, b: "Steve", c: "23512352zadf" }
  ]);
});
