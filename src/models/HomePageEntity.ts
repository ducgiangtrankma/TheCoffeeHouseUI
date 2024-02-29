export interface HomePageItemEntity {
  id: string;
  type: HomePageDataType;
  data: CategoryEntity[] | undefined;
}
export interface CategoryEntity {
  categoryId: string;
  categoryName: string;
  products: ProductEntity[];
}
export interface ProductEntity {
  id: string;
  name: string;
  price: number;
}
export enum HomePageDataType {
  STICK_HEADER = 'STICK_HEADER',
  MEMBER = 'MEMBER',
  BRAND_SERVICE = 'BRAND_SERVICE',
  SLIDER = 'SLIDER',
  FLASH_SALE = 'FLASH_SALE',
  BLOG_CONTENT = 'BLOG_CONTENT',
  CATEGORY = 'CATEGORY',
  CATEGORY_AND_PRODUCT = 'CATEGORY_AND_PRODUCT',
}
