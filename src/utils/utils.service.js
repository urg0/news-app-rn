import AppIcons from "@root/constants/assetManager/AppIcons";

export const getIconPath = (iconName) => {
  return AppIcons.GetIcon(iconName);
};

export const dateFormatter = (dateInput) => {
  const date = new Date(dateInput);

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate;
};
