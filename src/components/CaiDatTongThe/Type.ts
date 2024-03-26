export interface FieldConfig {
  isShow?: boolean;
  title?: string;
  hint?: string;
  component?: any;
}

export interface CaiDatTongTheConfig {
  tieuDe?: FieldConfig;
  moTa?: FieldConfig;
  link?: FieldConfig;
}

export interface CaiDatChiTietConfig {
  tieuDe?: FieldConfig;
  moTa?: FieldConfig;
  link?: FieldConfig;
  icon?: FieldConfig;
  file?: FieldConfig;

  headers: CaiDatChiTietColumn[];
  canAddNew?: boolean;
}

export interface SettingMailSenderConfig {
  code?: FieldConfig;
  tieuDe?: FieldConfig;
  noiDung?: FieldConfig;
  title?: FieldConfig;
  description?: FieldConfig;
}

export enum CaiDatChiTietColumn {
  Icon = "icon",
  TieuDe = "tieuDe",
  MoTa = "moTa",
  File = "file",
  Link = "link",
}

export const HeaderCaiDatChiTiet = {
  icon: { title: "Biểu tượng", key: "icon" },
  tieuDe: { title: "Tiêu đề", key: "tieuDe" },
  moTa: { title: "Nội dung", key: "moTa" },
  file: { title: "Ảnh", key: "linkAnh" },
  link: { title: "URL", key: "link" },
};
export const SettingMailSenderHeader = {
  code: { title: "Mã", key: "code" },
  tieuDe: { title: "Tiêu đề", key: "tieuDe" },
  noiDung: { title: "Nội Dung", key: "noiDung" },
  title: { title: "Title", key: "title" },
  description: { title: "Miêu tả", key: "description" },
};

export interface CaiDatTongTheCardConfig {
  caiDatTongThe?: CaiDatTongTheConfig;
  caiDatChiTiet?: CaiDatChiTietConfig;
  SettingMailSender?: SettingMailSenderConfig;
}

export const defaultConfig: CaiDatTongTheCardConfig = {
  caiDatTongThe: {
    tieuDe: { title: "Tiêu đề", isShow: true },
    moTa: { title: "Nội dung", isShow: true },
    link: { title: "URL đính kèm", isShow: true },
  },
  caiDatChiTiet: {
    tieuDe: { title: "Tiêu đề", isShow: true },
    moTa: { title: "Nội dung", isShow: true },
    link: { title: "URL đính kèm", isShow: true },
    file: { title: "File đính kèm", isShow: true },
    icon: {
      title: "Biểu tượng",
      isShow: true,
      hint: "Copy mã SVG của biểu tượng.",
    },
    canAddNew: true,
    headers: [
      CaiDatChiTietColumn.Icon,
      CaiDatChiTietColumn.TieuDe,
      CaiDatChiTietColumn.MoTa,
    ],
  },
  SettingMailSenderConfig: {
    code: { title: "Mã", isShow: true },
    tieuDe: { title: "Tiêu đề", isShow: true },
    noiDung: { title: "Nội Dung", isShow: true },
    title: { title: "Title", isShow: true },
    description: { title: "Miêu tả", isShow: true },
  },
} as CaiDatTongTheCardConfig;
