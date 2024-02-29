import {HomePageDataType, HomePageItemEntity} from '../../models';

export const DATA: HomePageItemEntity[] = [
  {
    id: '1',
    type: HomePageDataType.STICK_HEADER,
    data: undefined,
  },
  {
    id: '2',
    type: HomePageDataType.MEMBER,
    data: undefined,
  },
  {
    id: '3',
    type: HomePageDataType.BRAND_SERVICE,
    data: undefined,
  },
  {
    id: '4',
    type: HomePageDataType.SLIDER,
    data: undefined,
  },
  {
    id: '5',
    type: HomePageDataType.FLASH_SALE,
    data: undefined,
  },
  {
    id: '6',
    type: HomePageDataType.BLOG_CONTENT,
    data: undefined,
  },
  {
    id: '7',
    type: HomePageDataType.CATEGORY,
    data: undefined,
  },
  {
    id: '8',
    type: HomePageDataType.CATEGORY_AND_PRODUCT,
    data: [
      {
        categoryId: '1',
        categoryName: 'Món mới phải thử',
        products: [
          {
            id: '1',
            name: 'Olong Tứ Quý Kim Quất Trân Châu',
            price: 59000,
          },
        ],
      },
      {
        categoryId: '2',
        categoryName: 'Trà Trái cÂY - HiTea',
        products: [
          {
            id: '2',
            name: 'Olong Tứ Quý Kim Quất Trân Châu',
            price: 59000,
          },
        ],
      },
    ],
  },
];
