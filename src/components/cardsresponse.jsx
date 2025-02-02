const cardsresponse = {
  groupedCard: {
    cardGroupMap: {
      REGULAR: {
        cards: [
          {
            card: {
              card: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                badges: {},
                vegOnlyDetails: {
                  imageId: "AutoVegOnly_qkjowj",
                  title: "Showing only vegetarian options.",
                  description:
                    "Tap on the VEG ONLY button to turn off the setting",
                },
                topRatedFilter: {
                  attributes: {
                    displayText: "Ratings 4.0+",
                  },
                },
                kidsCategoryFilter: {
                  attributes: {
                    displayText: "Kids Favourites",
                    tooltip: {
                      enabled: true,
                      displayText:
                        "Kids Favourites Filter applied. Remove this filter to see the full Menu.",
                    },
                  },
                },
                vegFilter: {
                  attributes: {
                    displayText: "VEG",
                  },
                },
                nonvegFilter: {
                  attributes: {
                    displayText: "NONVEG",
                  },
                },
                bolt: {
                  attributes: {
                    displayText: "10 Mins Delivery",
                    displayImage: "bolt/bolt_filter_image_final.png",
                    unselectedDisplayImage: "bolt/bolt_filter_image_final.png",
                  },
                },
              },
              relevance: {
                type: "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                sectionId: "MENU_FILTER_TOGGLE",
              },
            },
          },
          {
            card: {
              card: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.MenuReorder",
                name: "Want to repeat?",
                dishes: [
                  {
                    info: {
                      id: "94998882",
                      name: "Chicken Steam Momos",
                      category: "Momos",
                      imageId:
                        "FOOD_CATALOG/IMAGES/CMS/2025/1/21/f8f682cf-40f6-4744-a734-3dbcf2b6ee76_ebf69fa9-442d-4e33-9ac8-bde8a76b6648.jpg",
                      inStock: 1,
                      variants: {},
                      variantsV2: {
                        variantGroups: [
                          {
                            groupId: "50307190",
                            name: "Quantity",
                            variations: [
                              {
                                name: "6 Pieces",
                                price: 230,
                                default: 1,
                                id: "157516803",
                                inStock: 1,
                                isEnabled: 1,
                              },
                              {
                                name: "8 Pieces",
                                price: 250,
                                id: "157516801",
                                inStock: 1,
                                isEnabled: 1,
                              },
                              {
                                name: "10 Pieces",
                                price: 280,
                                id: "157516802",
                                inStock: 1,
                                isEnabled: 1,
                              },
                            ],
                          },
                        ],
                        pricingModels: [
                          {
                            variations: [
                              {
                                groupId: "50307190",
                                variationId: "157516803",
                              },
                            ],
                            price: 23000,
                          },
                          {
                            variations: [
                              {
                                groupId: "50307190",
                                variationId: "157516801",
                              },
                            ],
                            price: 25000,
                          },
                          {
                            variations: [
                              {
                                groupId: "50307190",
                                variationId: "157516802",
                              },
                            ],
                            price: 28000,
                          },
                        ],
                      },
                      itemAttribute: {
                        vegClassifier: "NONVEG",
                      },
                      defaultPrice: 23000,
                      ribbon: {
                        text: "Bestseller",
                        textColor: "#ffffff",
                        topBackgroundColor: "#d53d4c",
                        bottomBackgroundColor: "#b02331",
                      },
                      showImage: true,
                      type: "ITEM",
                      itemBadge: {},
                      badgesV2: {},
                      isBestseller: true,
                      ratings: {
                        aggregatedRating: {
                          rating: "4.8",
                          ratingCount: "26 ratings",
                          ratingCountV2: "26",
                        },
                      },
                    },
                    hideRestaurantDetails: true,
                  },
                ],
                imageSize: "IMAGE_SIZE_LARGE",
              },
            },
          },
          {
            card: {
              card: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel",
                title: "Top Picks",
                carousel: [
                  {
                    type: "TopCarousel",
                    subtype: "image",
                    bannerId: "2383092",
                    creativeId: "TopPicks2024/94999044A.png",
                    title: "Cheese Corn Kurkure Momos",
                    description: " ",
                    fontColor: "#FFFFFF",
                    dish: {
                      info: {
                        id: "94999044",
                        name: "Cheese Corn Kurkure Momos",
                        category: "Momos",
                        imageId:
                          "FOOD_CATALOG/IMAGES/CMS/2025/1/21/e312ef0d-6d7b-4e56-aeae-a5bfa72cd577_da077129-d7a2-45ca-9b8d-fe21ad466947.jpg",
                        inStock: 1,
                        isVeg: 1,
                        variants: {},
                        variantsV2: {
                          variantGroups: [
                            {
                              groupId: "50307181",
                              name: "Quantity",
                              variations: [
                                {
                                  name: "6 Pieces",
                                  price: 260,
                                  default: 1,
                                  id: "157516776",
                                  inStock: 1,
                                  isVeg: 1,
                                  isEnabled: 1,
                                },
                                {
                                  name: "8 Pieces",
                                  price: 270,
                                  id: "157516774",
                                  inStock: 1,
                                  isVeg: 1,
                                  isEnabled: 1,
                                },
                                {
                                  name: "10 Pieces",
                                  price: 320,
                                  id: "157516775",
                                  inStock: 1,
                                  isVeg: 1,
                                  isEnabled: 1,
                                },
                              ],
                            },
                          ],
                          pricingModels: [
                            {
                              variations: [
                                {
                                  groupId: "50307181",
                                  variationId: "157516776",
                                },
                              ],
                              price: 26000,
                            },
                            {
                              variations: [
                                {
                                  groupId: "50307181",
                                  variationId: "157516774",
                                },
                              ],
                              price: 27000,
                            },
                            {
                              variations: [
                                {
                                  groupId: "50307181",
                                  variationId: "157516775",
                                },
                              ],
                              price: 32000,
                            },
                          ],
                        },
                        itemAttribute: {
                          vegClassifier: "VEG",
                        },
                        defaultPrice: 26000,
                        ribbon: {
                          text: "Bestseller",
                          textColor: "#ffffff",
                          topBackgroundColor: "#d53d4c",
                          bottomBackgroundColor: "#b02331",
                        },
                        itemBadge: {},
                        badgesV2: {},
                        isBestseller: true,
                      },
                      analytics: {},
                      hideRestaurantDetails: true,
                    },
                  },
                  {
                    type: "TopCarousel",
                    subtype: "image",
                    bannerId: "2383093",
                    creativeId: "TopPicks2024/94999142A.png",
                    title: "Paneer Cheese Kurkure Momos",
                    description: " ",
                    fontColor: "#FFFFFF",
                    dish: {
                      info: {
                        id: "94999142",
                        name: "Paneer Cheese Kurkure Momos",
                        category: "Momos",
                        imageId:
                          "FOOD_CATALOG/IMAGES/CMS/2025/1/21/651cff15-3f78-47a8-acb7-792395360126_506a6129-7db6-45a1-a050-83c411895d51.jpg",
                        inStock: 1,
                        isVeg: 1,
                        variants: {},
                        variantsV2: {
                          variantGroups: [
                            {
                              groupId: "50307184",
                              name: "Quantity",
                              variations: [
                                {
                                  name: "6 Pieces",
                                  price: 260,
                                  default: 1,
                                  id: "157516785",
                                  inStock: 1,
                                  isVeg: 1,
                                  isEnabled: 1,
                                },
                                {
                                  name: "8 Pieces",
                                  price: 270,
                                  id: "157516783",
                                  inStock: 1,
                                  isVeg: 1,
                                  isEnabled: 1,
                                },
                                {
                                  name: "10 Pieces",
                                  price: 320,
                                  id: "157516784",
                                  inStock: 1,
                                  isVeg: 1,
                                  isEnabled: 1,
                                },
                              ],
                            },
                          ],
                          pricingModels: [
                            {
                              variations: [
                                {
                                  groupId: "50307184",
                                  variationId: "157516785",
                                },
                              ],
                              price: 26000,
                            },
                            {
                              variations: [
                                {
                                  groupId: "50307184",
                                  variationId: "157516783",
                                },
                              ],
                              price: 27000,
                            },
                            {
                              variations: [
                                {
                                  groupId: "50307184",
                                  variationId: "157516784",
                                },
                              ],
                              price: 32000,
                            },
                          ],
                        },
                        itemAttribute: {
                          vegClassifier: "VEG",
                        },
                        defaultPrice: 26000,
                        ribbon: {
                          text: "Bestseller",
                          textColor: "#ffffff",
                          topBackgroundColor: "#d53d4c",
                          bottomBackgroundColor: "#b02331",
                        },
                        itemBadge: {},
                        badgesV2: {},
                        isBestseller: true,
                      },
                      analytics: {},
                      hideRestaurantDetails: true,
                    },
                  },
                ],
              },
            },
          },
          {
            card: {
              card: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                title: "Momos",
                categories: [
                  {
                    title: "Kurkure Momos",
                    itemCards: [
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "87802772",
                            name: "Veg Cheese Kurkure Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/b1db77b1-7dc0-4a62-b3d6-20b818ddf2ff_36686c6b-3179-4253-b547-1412a5ead764.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307186",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 230,
                                      default: 1,
                                      id: "157516791",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 250,
                                      id: "157516789",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 280,
                                      id: "157516790",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307186",
                                      variationId: "157516791",
                                    },
                                  ],
                                  price: 23000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307186",
                                      variationId: "157516789",
                                    },
                                  ],
                                  price: 25000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307186",
                                      variationId: "157516790",
                                    },
                                  ],
                                  price: 28000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 23000,
                            ribbon: {
                              text: "Bestseller",
                              textColor: "#ffffff",
                              topBackgroundColor: "#d53d4c",
                              bottomBackgroundColor: "#b02331",
                            },
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            isBestseller: true,
                            ratings: {
                              aggregatedRating: {
                                rating: "4.5",
                                ratingCount: "58 ratings",
                                ratingCountV2: "58",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "94998991",
                            name: "Chicken Kurkure Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/6b5b7361-da47-4962-8103-fed1cee1159b_8df79f68-8859-4f20-9c83-b2dcb71c7bc4.jpg",
                            inStock: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307183",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 280,
                                      default: 1,
                                      id: "157516782",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 300,
                                      id: "157516780",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 330,
                                      id: "157516781",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307183",
                                      variationId: "157516782",
                                    },
                                  ],
                                  price: 28000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307183",
                                      variationId: "157516780",
                                    },
                                  ],
                                  price: 30000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307183",
                                      variationId: "157516781",
                                    },
                                  ],
                                  price: 33000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            defaultPrice: 28000,
                            ribbon: {
                              text: "Bestseller",
                              textColor: "#ffffff",
                              topBackgroundColor: "#d53d4c",
                              bottomBackgroundColor: "#b02331",
                            },
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            isBestseller: true,
                            ratings: {
                              aggregatedRating: {
                                rating: "4.3",
                                ratingCount: "36 ratings",
                                ratingCountV2: "36",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "94999044",
                            name: "Cheese Corn Kurkure Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/e312ef0d-6d7b-4e56-aeae-a5bfa72cd577_da077129-d7a2-45ca-9b8d-fe21ad466947.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307181",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 260,
                                      default: 1,
                                      id: "157516776",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 270,
                                      id: "157516774",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 320,
                                      id: "157516775",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307181",
                                      variationId: "157516776",
                                    },
                                  ],
                                  price: 26000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307181",
                                      variationId: "157516774",
                                    },
                                  ],
                                  price: 27000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307181",
                                      variationId: "157516775",
                                    },
                                  ],
                                  price: 32000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 26000,
                            ribbon: {
                              text: "Bestseller",
                              textColor: "#ffffff",
                              topBackgroundColor: "#d53d4c",
                              bottomBackgroundColor: "#b02331",
                            },
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            isBestseller: true,
                            ratings: {
                              aggregatedRating: {
                                rating: "4.3",
                                ratingCount: "21 ratings",
                                ratingCountV2: "21",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "87802773",
                            name: "Veg Kurkure Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/a4b583d5-30bf-433a-90f4-8c1474bb2ff0_f2edd38a-b584-4e20-90b0-6075550a1ac6.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307187",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 210,
                                      default: 1,
                                      id: "157516794",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 230,
                                      id: "157516792",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 260,
                                      id: "157516793",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307187",
                                      variationId: "157516794",
                                    },
                                  ],
                                  price: 21000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307187",
                                      variationId: "157516792",
                                    },
                                  ],
                                  price: 23000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307187",
                                      variationId: "157516793",
                                    },
                                  ],
                                  price: 26000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 21000,
                            ribbon: {
                              text: "Bestseller",
                              textColor: "#ffffff",
                              topBackgroundColor: "#d53d4c",
                              bottomBackgroundColor: "#b02331",
                            },
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            isBestseller: true,
                            ratings: {
                              aggregatedRating: {
                                rating: "4.6",
                                ratingCount: "28 ratings",
                                ratingCountV2: "28",
                              },
                            },
                            isBolt: true,
                            boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "94999142",
                            name: "Paneer Cheese Kurkure Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/651cff15-3f78-47a8-acb7-792395360126_506a6129-7db6-45a1-a050-83c411895d51.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307184",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 260,
                                      default: 1,
                                      id: "157516785",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 270,
                                      id: "157516783",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 320,
                                      id: "157516784",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307184",
                                      variationId: "157516785",
                                    },
                                  ],
                                  price: 26000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307184",
                                      variationId: "157516783",
                                    },
                                  ],
                                  price: 27000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307184",
                                      variationId: "157516784",
                                    },
                                  ],
                                  price: 32000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 26000,
                            ribbon: {
                              text: "Bestseller",
                              textColor: "#ffffff",
                              topBackgroundColor: "#d53d4c",
                              bottomBackgroundColor: "#b02331",
                            },
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            isBestseller: true,
                            ratings: {
                              aggregatedRating: {
                                rating: "4.4",
                                ratingCount: "10 ratings",
                                ratingCountV2: "10",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752317",
                            name: "Chicken Cheese Kurkure Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/17a06920-5947-41a9-be14-bc86342f1240_bb3c8873-0bb4-4be7-a641-b9474dfad6fe.jpg",
                            inStock: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307182",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 300,
                                      default: 1,
                                      id: "157516779",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 320,
                                      id: "157516777",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 350,
                                      id: "157516778",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307182",
                                      variationId: "157516779",
                                    },
                                  ],
                                  price: 30000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307182",
                                      variationId: "157516777",
                                    },
                                  ],
                                  price: 32000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307182",
                                      variationId: "157516778",
                                    },
                                  ],
                                  price: 35000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            defaultPrice: 30000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "94999101",
                            name: "Paneer Kurkure Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/19546d12-ebc7-4ba6-a171-906303b72406_f3df6951-e80d-416b-8f97-936e719de78b.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307185",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 250,
                                      default: 1,
                                      id: "157516788",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 260,
                                      id: "157516786",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 300,
                                      id: "157516787",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307185",
                                      variationId: "157516788",
                                    },
                                  ],
                                  price: 25000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307185",
                                      variationId: "157516786",
                                    },
                                  ],
                                  price: 26000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307185",
                                      variationId: "157516787",
                                    },
                                  ],
                                  price: 30000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 25000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {
                                rating: "3.2",
                                ratingCount: "3 ratings",
                                ratingCountV2: "3",
                              },
                            },
                            isBolt: true,
                            boltImageId: "bolt/bolt-tag/bolt_menu_tag.png",
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                    ],
                    subtitleSuffix: {},
                    categoryId: "24113313",
                  },
                  {
                    title: "Steam Momos",
                    itemCards: [
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "127855129",
                            name: "Veg Steam Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/1b2a2b9c-1b75-40a6-ba30-04a46d18931f_dbffe3a8-8cc2-4517-ad18-2e2c594556a5.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307194",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 140,
                                      default: 1,
                                      id: "157516815",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 160,
                                      id: "157516813",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 200,
                                      id: "157516814",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307194",
                                      variationId: "157516815",
                                    },
                                  ],
                                  price: 14000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307194",
                                      variationId: "157516813",
                                    },
                                  ],
                                  price: 16000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307194",
                                      variationId: "157516814",
                                    },
                                  ],
                                  price: 20000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 14000,
                            ribbon: {
                              text: "Bestseller",
                              textColor: "#ffffff",
                              topBackgroundColor: "#d53d4c",
                              bottomBackgroundColor: "#b02331",
                            },
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            isBestseller: true,
                            ratings: {
                              aggregatedRating: {
                                rating: "4.7",
                                ratingCount: "28 ratings",
                                ratingCountV2: "28",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "94998882",
                            name: "Chicken Steam Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/f8f682cf-40f6-4744-a734-3dbcf2b6ee76_ebf69fa9-442d-4e33-9ac8-bde8a76b6648.jpg",
                            inStock: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307190",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 230,
                                      default: 1,
                                      id: "157516803",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 250,
                                      id: "157516801",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 280,
                                      id: "157516802",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307190",
                                      variationId: "157516803",
                                    },
                                  ],
                                  price: 23000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307190",
                                      variationId: "157516801",
                                    },
                                  ],
                                  price: 25000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307190",
                                      variationId: "157516802",
                                    },
                                  ],
                                  price: 28000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            defaultPrice: 23000,
                            ribbon: {
                              text: "Bestseller",
                              textColor: "#ffffff",
                              topBackgroundColor: "#d53d4c",
                              bottomBackgroundColor: "#b02331",
                            },
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            isBestseller: true,
                            ratings: {
                              aggregatedRating: {
                                rating: "4.8",
                                ratingCount: "26 ratings",
                                ratingCountV2: "26",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "94998781",
                            name: "Paneer Steam Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/76b66bfb-971b-46d6-b154-a0d193f14da2_f1effce1-fd5a-4a37-8e04-8c2783cd7d0f.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307192",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 180,
                                      default: 1,
                                      id: "157516809",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 200,
                                      id: "157516807",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 230,
                                      id: "157516808",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307192",
                                      variationId: "157516809",
                                    },
                                  ],
                                  price: 18000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307192",
                                      variationId: "157516807",
                                    },
                                  ],
                                  price: 20000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307192",
                                      variationId: "157516808",
                                    },
                                  ],
                                  price: 23000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 18000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {
                                rating: "4.5",
                                ratingCount: "9 ratings",
                                ratingCountV2: "9",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "94998796",
                            name: "Veg Cheese Steam Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/62b2f7fe-0293-4ac7-b68d-093a98013642_d0b2a95f-3be9-46d0-94f8-99b72028d4d5.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307193",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 160,
                                      default: 1,
                                      id: "157516812",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 180,
                                      id: "157516810",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 210,
                                      id: "157516811",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307193",
                                      variationId: "157516812",
                                    },
                                  ],
                                  price: 16000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307193",
                                      variationId: "157516810",
                                    },
                                  ],
                                  price: 18000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307193",
                                      variationId: "157516811",
                                    },
                                  ],
                                  price: 21000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 16000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {
                                rating: "4.2",
                                ratingCount: "16 ratings",
                                ratingCountV2: "16",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752319",
                            name: "Chicken Cheese Steam Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/87439ee0-459b-46a3-83c4-59460a1ec850_bc96ead4-e96d-46eb-a483-117b880371d3.jpg",
                            inStock: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307189",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 250,
                                      default: 1,
                                      id: "157516800",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 260,
                                      id: "157516798",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 300,
                                      id: "157516799",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307189",
                                      variationId: "157516800",
                                    },
                                  ],
                                  price: 25000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307189",
                                      variationId: "157516798",
                                    },
                                  ],
                                  price: 26000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307189",
                                      variationId: "157516799",
                                    },
                                  ],
                                  price: 30000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            defaultPrice: 25000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752320",
                            name: "Paneer Cheese Steam Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/0fb95309-10f4-425d-9574-349b7c927358_727ce6a0-ef25-450c-9c0e-4d5e56cad937.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307191",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 210,
                                      default: 1,
                                      id: "157516806",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 230,
                                      id: "157516804",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 260,
                                      id: "157516805",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307191",
                                      variationId: "157516806",
                                    },
                                  ],
                                  price: 21000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307191",
                                      variationId: "157516804",
                                    },
                                  ],
                                  price: 23000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307191",
                                      variationId: "157516805",
                                    },
                                  ],
                                  price: 26000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 21000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752318",
                            name: "Cheese Corn Steam Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/a4088f3b-47e3-45ba-bf75-6cf99f5794c5_a95c6823-9003-478a-b8b0-16a0b380ac11.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307188",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 210,
                                      default: 1,
                                      id: "157516797",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 230,
                                      id: "157516795",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 260,
                                      id: "157516796",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307188",
                                      variationId: "157516797",
                                    },
                                  ],
                                  price: 21000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307188",
                                      variationId: "157516795",
                                    },
                                  ],
                                  price: 23000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307188",
                                      variationId: "157516796",
                                    },
                                  ],
                                  price: 26000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 21000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                    ],
                    subtitleSuffix: {},
                    categoryId: "24113329",
                  },
                  {
                    title: "Tandoori Momos",
                    itemCards: [
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "94990244",
                            name: "Veg Tandoori Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/fddba76e-7603-4180-9612-0aed7362e15a_6e2f98ec-0a73-451f-9d1f-e3a970caa679.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307215",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 230,
                                      default: 1,
                                      id: "157516878",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 250,
                                      id: "157516876",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 280,
                                      id: "157516877",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307215",
                                      variationId: "157516878",
                                    },
                                  ],
                                  price: 23000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307215",
                                      variationId: "157516876",
                                    },
                                  ],
                                  price: 25000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307215",
                                      variationId: "157516877",
                                    },
                                  ],
                                  price: 28000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 23000,
                            ribbon: {
                              text: "Bestseller",
                              textColor: "#ffffff",
                              topBackgroundColor: "#d53d4c",
                              bottomBackgroundColor: "#b02331",
                            },
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            isBestseller: true,
                            ratings: {
                              aggregatedRating: {
                                rating: "4.0",
                                ratingCount: "18 ratings",
                                ratingCountV2: "18",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "94990337",
                            name: "Chicken Tandoori Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/0b661e89-a7a0-4882-994d-b642ab7a58c7_eecf3b8a-bd90-4ed0-b26f-89350ab49da2.jpg",
                            inStock: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307211",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 300,
                                      default: 1,
                                      id: "157516866",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 320,
                                      id: "157516864",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 350,
                                      id: "157516865",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307211",
                                      variationId: "157516866",
                                    },
                                  ],
                                  price: 30000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307211",
                                      variationId: "157516864",
                                    },
                                  ],
                                  price: 32000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307211",
                                      variationId: "157516865",
                                    },
                                  ],
                                  price: 35000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            defaultPrice: 30000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {
                                rating: "4.5",
                                ratingCount: "13 ratings",
                                ratingCountV2: "13",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "94990181",
                            name: "Veg Cheese Tandoori Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/71934014-49a2-42e0-93ef-a85c07dd9127_bab56473-bb67-4b69-a29e-913407623fc3.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307214",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 250,
                                      default: 1,
                                      id: "157516875",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 260,
                                      id: "157516873",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 300,
                                      id: "157516874",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307214",
                                      variationId: "157516875",
                                    },
                                  ],
                                  price: 25000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307214",
                                      variationId: "157516873",
                                    },
                                  ],
                                  price: 26000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307214",
                                      variationId: "157516874",
                                    },
                                  ],
                                  price: 30000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 25000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {
                                rating: "2.2",
                                ratingCount: "3 ratings",
                                ratingCountV2: "3",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "94990141",
                            name: "Paneer Cheese Tandoori Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/b1aeeb5d-9bdd-43ec-84f7-b5e735fda044_b3686a39-409a-4c56-afba-fcdaa3e15ff0.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307212",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 280,
                                      default: 1,
                                      id: "157516869",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 300,
                                      id: "157516867",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 330,
                                      id: "157516868",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307212",
                                      variationId: "157516869",
                                    },
                                  ],
                                  price: 28000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307212",
                                      variationId: "157516867",
                                    },
                                  ],
                                  price: 30000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307212",
                                      variationId: "157516868",
                                    },
                                  ],
                                  price: 33000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 28000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {
                                rating: "5.0",
                                ratingCount: "4 ratings",
                                ratingCountV2: "4",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "94990142",
                            name: "Paneer Tandoori Momos",
                            category: "Momos",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307213",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 260,
                                      default: 1,
                                      id: "157516872",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 280,
                                      id: "157516870",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 320,
                                      id: "157516871",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307213",
                                      variationId: "157516872",
                                    },
                                  ],
                                  price: 26000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307213",
                                      variationId: "157516870",
                                    },
                                  ],
                                  price: 28000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307213",
                                      variationId: "157516871",
                                    },
                                  ],
                                  price: 32000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 26000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "94990335",
                            name: "Cheese Corn Tandoori Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/fd8e042e-dcf0-4787-abc2-85bd0a786347_bb39f5cc-1883-4938-ae95-5930c6965557.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307209",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 280,
                                      default: 1,
                                      id: "157516860",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 300,
                                      id: "157516858",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 330,
                                      id: "157516859",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307209",
                                      variationId: "157516860",
                                    },
                                  ],
                                  price: 28000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307209",
                                      variationId: "157516858",
                                    },
                                  ],
                                  price: 30000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307209",
                                      variationId: "157516859",
                                    },
                                  ],
                                  price: 33000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 28000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752331",
                            name: "Chicken Cheese Tandoori Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/bbf1f14c-2466-44fc-b371-ba051c96bc01_85f9f03a-51d8-4538-b4b5-3ed5e160254d.jpg",
                            inStock: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307210",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 320,
                                      default: 1,
                                      id: "157516863",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 330,
                                      id: "157516861",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 370,
                                      id: "157516862",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307210",
                                      variationId: "157516863",
                                    },
                                  ],
                                  price: 32000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307210",
                                      variationId: "157516861",
                                    },
                                  ],
                                  price: 33000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307210",
                                      variationId: "157516862",
                                    },
                                  ],
                                  price: 37000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            defaultPrice: 32000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                    ],
                    subtitleSuffix: {},
                    categoryId: "54737853",
                  },
                  {
                    title: "Fried Momos",
                    itemCards: [
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "94998974",
                            name: "Veg Fried Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/5a78c610-da93-4f7d-80fe-ba8a836af5cf_0a0d8623-aaa2-4c4f-8a58-50c34da8a684.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307201",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 180,
                                      default: 1,
                                      id: "157516836",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 200,
                                      id: "157516834",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 230,
                                      id: "157516835",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307201",
                                      variationId: "157516836",
                                    },
                                  ],
                                  price: 18000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307201",
                                      variationId: "157516834",
                                    },
                                  ],
                                  price: 20000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307201",
                                      variationId: "157516835",
                                    },
                                  ],
                                  price: 23000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 18000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {
                                rating: "4.2",
                                ratingCount: "6 ratings",
                                ratingCountV2: "6",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "94998918",
                            name: "Veg Cheese Fried Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/90e58ccb-d5b9-4956-8dfb-bccee40a867a_6957b944-36d4-4844-8245-4f0bf944063d.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307200",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 200,
                                      default: 1,
                                      id: "157516833",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 210,
                                      id: "157516831",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 250,
                                      id: "157516832",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307200",
                                      variationId: "157516833",
                                    },
                                  ],
                                  price: 20000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307200",
                                      variationId: "157516831",
                                    },
                                  ],
                                  price: 21000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307200",
                                      variationId: "157516832",
                                    },
                                  ],
                                  price: 25000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 20000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {
                                rating: "5.0",
                                ratingCount: "3 ratings",
                                ratingCountV2: "3",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752321",
                            name: "Cheese Corn Fried Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/cd6d8eb1-9ed6-4cfa-af7a-4864cd82f45e_54460b77-1e87-4217-b801-ad32827500c7.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307195",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 230,
                                      default: 1,
                                      id: "157516818",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 250,
                                      id: "157516816",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 280,
                                      id: "157516817",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307195",
                                      variationId: "157516818",
                                    },
                                  ],
                                  price: 23000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307195",
                                      variationId: "157516816",
                                    },
                                  ],
                                  price: 25000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307195",
                                      variationId: "157516817",
                                    },
                                  ],
                                  price: 28000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 23000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752322",
                            name: "Chicken Cheese Fried Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/36d3f46e-2eed-40cd-91dd-fc4ab1c12fde_9967f713-4805-4af4-ac90-6d45f9ceac6c.jpg",
                            inStock: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307196",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 260,
                                      default: 1,
                                      id: "157516821",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 280,
                                      id: "157516819",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 320,
                                      id: "157516820",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307196",
                                      variationId: "157516821",
                                    },
                                  ],
                                  price: 26000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307196",
                                      variationId: "157516819",
                                    },
                                  ],
                                  price: 28000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307196",
                                      variationId: "157516820",
                                    },
                                  ],
                                  price: 32000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            defaultPrice: 26000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752323",
                            name: "Chicken Fried Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/374dba80-9af2-4769-addf-9d39d73da418_013b03d2-a013-4026-a1b3-c0360ccf055b.jpg",
                            inStock: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307197",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 250,
                                      default: 1,
                                      id: "157516824",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 260,
                                      id: "157516822",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 300,
                                      id: "157516823",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307197",
                                      variationId: "157516824",
                                    },
                                  ],
                                  price: 25000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307197",
                                      variationId: "157516822",
                                    },
                                  ],
                                  price: 26000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307197",
                                      variationId: "157516823",
                                    },
                                  ],
                                  price: 30000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            defaultPrice: 25000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752324",
                            name: "Paneer Cheese Fried Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/50d74f2c-824c-4ab3-b814-d7d2566e4a21_26a43ae4-3796-4ded-9308-2234e5f41b7a.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307198",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 230,
                                      default: 1,
                                      id: "157516827",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 250,
                                      id: "157516825",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 280,
                                      id: "157516826",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307198",
                                      variationId: "157516827",
                                    },
                                  ],
                                  price: 23000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307198",
                                      variationId: "157516825",
                                    },
                                  ],
                                  price: 25000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307198",
                                      variationId: "157516826",
                                    },
                                  ],
                                  price: 28000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 23000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752325",
                            name: "Paneer Fried Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/cab1b7ba-d3bf-48cf-ae69-1d81a5ee1f88_75b74472-85d6-42b4-8d46-7a2facaf8ade.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307199",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 210,
                                      default: 1,
                                      id: "157516830",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 230,
                                      id: "157516828",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 260,
                                      id: "157516829",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307199",
                                      variationId: "157516830",
                                    },
                                  ],
                                  price: 21000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307199",
                                      variationId: "157516828",
                                    },
                                  ],
                                  price: 23000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307199",
                                      variationId: "157516829",
                                    },
                                  ],
                                  price: 26000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 21000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                    ],
                    subtitleSuffix: {},
                    categoryId: "24113328",
                  },
                  {
                    title: "Chilly Momos",
                    itemCards: [
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752339",
                            name: "Chicken Cheese Chilly Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/ae7446ac-efdf-43fc-be51-ca644364d359_c7813379-8696-4460-ab11-f20bd02b4907.jpg",
                            inStock: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307217",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 370,
                                      default: 1,
                                      id: "157516884",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 390,
                                      id: "157516882",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 430,
                                      id: "157516883",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307217",
                                      variationId: "157516884",
                                    },
                                  ],
                                  price: 37000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307217",
                                      variationId: "157516882",
                                    },
                                  ],
                                  price: 39000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307217",
                                      variationId: "157516883",
                                    },
                                  ],
                                  price: 43000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            defaultPrice: 37000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752343",
                            name: "Veg Cheese Chilly Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/1f100ecb-3af5-4a3f-b143-0e821998d0a1_0f30c7a0-e308-484f-bb5e-648ee5025d87.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307221",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 280,
                                      default: 1,
                                      id: "157516896",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 300,
                                      id: "157516894",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 330,
                                      id: "157516895",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307221",
                                      variationId: "157516896",
                                    },
                                  ],
                                  price: 28000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307221",
                                      variationId: "157516894",
                                    },
                                  ],
                                  price: 30000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307221",
                                      variationId: "157516895",
                                    },
                                  ],
                                  price: 33000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 28000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752338",
                            name: "Cheese Corn Chilly Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/878eddcb-9cd9-40bd-b3c5-4269b6ce2d7b_d0bea8d6-24b3-4d5d-8c68-ed897faf8285.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307216",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 320,
                                      default: 1,
                                      id: "157516881",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 330,
                                      id: "157516879",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 370,
                                      id: "157516880",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307216",
                                      variationId: "157516881",
                                    },
                                  ],
                                  price: 32000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307216",
                                      variationId: "157516879",
                                    },
                                  ],
                                  price: 33000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307216",
                                      variationId: "157516880",
                                    },
                                  ],
                                  price: 37000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 32000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752340",
                            name: "Chicken Chilly Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/d4cb6b1e-c398-481f-a055-986ff8e1c05f_7dbdcdea-b3fe-44f2-8090-3ea427d2dc6c.jpg",
                            inStock: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307218",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 350,
                                      default: 1,
                                      id: "157516887",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 370,
                                      id: "157516885",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 410,
                                      id: "157516886",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307218",
                                      variationId: "157516887",
                                    },
                                  ],
                                  price: 35000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307218",
                                      variationId: "157516885",
                                    },
                                  ],
                                  price: 37000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307218",
                                      variationId: "157516886",
                                    },
                                  ],
                                  price: 41000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            defaultPrice: 35000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752341",
                            name: "Paneer Cheese Chilly Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/11e3e5aa-d4ac-4ea1-8955-ad2de14dd6e7_50b1273e-86fb-4de6-9efe-ed4524328406.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307219",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 320,
                                      default: 1,
                                      id: "157516890",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 330,
                                      id: "157516888",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 370,
                                      id: "157516889",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307219",
                                      variationId: "157516890",
                                    },
                                  ],
                                  price: 32000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307219",
                                      variationId: "157516888",
                                    },
                                  ],
                                  price: 33000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307219",
                                      variationId: "157516889",
                                    },
                                  ],
                                  price: 37000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 32000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752342",
                            name: "Paneer Chilly Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/656b70c6-3f4d-4935-b312-619f75201d9b_3d04aada-4409-4ee5-bc1b-fd487027af73.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307220",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 300,
                                      default: 1,
                                      id: "157516893",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 320,
                                      id: "157516891",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 350,
                                      id: "157516892",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307220",
                                      variationId: "157516893",
                                    },
                                  ],
                                  price: 30000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307220",
                                      variationId: "157516891",
                                    },
                                  ],
                                  price: 32000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307220",
                                      variationId: "157516892",
                                    },
                                  ],
                                  price: 35000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 30000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752344",
                            name: "Veg Chilly Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/d24b1984-ed0c-4d23-9cb3-4d87c88efc14_e1721bf5-2dea-49b5-90d6-9996f1a16476.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307222",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 260,
                                      default: 1,
                                      id: "157516899",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 280,
                                      id: "157516897",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 320,
                                      id: "157516898",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307222",
                                      variationId: "157516899",
                                    },
                                  ],
                                  price: 26000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307222",
                                      variationId: "157516897",
                                    },
                                  ],
                                  price: 28000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307222",
                                      variationId: "157516898",
                                    },
                                  ],
                                  price: 32000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 26000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                    ],
                    subtitleSuffix: {},
                    categoryId: "54737855",
                  },
                  {
                    title: "Saute Momos",
                    itemCards: [
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "94998816",
                            name: "Veg Saute Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/d00cf19f-4241-4cb8-89fa-4a7ae13053a3_682b203c-0c67-41b8-b327-e614b0b8a513.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307208",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 210,
                                      default: 1,
                                      id: "157516857",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 230,
                                      id: "157516855",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 260,
                                      id: "157516856",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307208",
                                      variationId: "157516857",
                                    },
                                  ],
                                  price: 21000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307208",
                                      variationId: "157516855",
                                    },
                                  ],
                                  price: 23000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307208",
                                      variationId: "157516856",
                                    },
                                  ],
                                  price: 26000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 21000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {
                                rating: "4.5",
                                ratingCount: "3 ratings",
                                ratingCountV2: "3",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "94998830",
                            name: "Chicken Saute Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/c412ec7c-44d4-412f-a53e-91494c0315fe_1f83a038-09f8-470a-bb9d-ee0f1703dbf1.jpg",
                            inStock: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307204",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 280,
                                      default: 1,
                                      id: "157516845",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 300,
                                      id: "157516843",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 330,
                                      id: "157516844",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307204",
                                      variationId: "157516845",
                                    },
                                  ],
                                  price: 28000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307204",
                                      variationId: "157516843",
                                    },
                                  ],
                                  price: 30000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307204",
                                      variationId: "157516844",
                                    },
                                  ],
                                  price: 33000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            defaultPrice: 28000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {
                                rating: "3.8",
                                ratingCount: "3 ratings",
                                ratingCountV2: "3",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752326",
                            name: "Cheese Corn Saute Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/1d27a108-bbd6-40f1-92ff-1b2ef3e977c2_5e369903-b75b-434a-878e-4ff18eacb96c.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307202",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 260,
                                      default: 1,
                                      id: "157516839",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 280,
                                      id: "157516837",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 320,
                                      id: "157516838",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307202",
                                      variationId: "157516839",
                                    },
                                  ],
                                  price: 26000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307202",
                                      variationId: "157516837",
                                    },
                                  ],
                                  price: 28000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307202",
                                      variationId: "157516838",
                                    },
                                  ],
                                  price: 32000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 26000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752327",
                            name: "Chicken Cheese Saute Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/7a2394d5-6fb5-43bf-a283-daa65d296134_bba33f67-3723-4d24-be6f-a4cf4096893a.jpg",
                            inStock: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307203",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 300,
                                      default: 1,
                                      id: "157516842",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 320,
                                      id: "157516840",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 350,
                                      id: "157516841",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307203",
                                      variationId: "157516842",
                                    },
                                  ],
                                  price: 30000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307203",
                                      variationId: "157516840",
                                    },
                                  ],
                                  price: 32000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307203",
                                      variationId: "157516841",
                                    },
                                  ],
                                  price: 35000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            defaultPrice: 30000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752328",
                            name: "Paneer Cheese Saute Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/16f94ca9-349e-42b6-bb08-c21fcf02b166_99f2d221-3ce4-46d9-b0ed-74e306a3cebc.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307205",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 260,
                                      default: 1,
                                      id: "157516848",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 280,
                                      id: "157516846",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 320,
                                      id: "157516847",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307205",
                                      variationId: "157516848",
                                    },
                                  ],
                                  price: 26000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307205",
                                      variationId: "157516846",
                                    },
                                  ],
                                  price: 28000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307205",
                                      variationId: "157516847",
                                    },
                                  ],
                                  price: 32000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 26000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752329",
                            name: "Paneer Saute Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/54fa6dd4-9916-4e1c-b4a9-5d616d1cb367_5984ba40-3cb6-4238-bae5-7a631ca17113.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307206",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 250,
                                      default: 1,
                                      id: "157516851",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 260,
                                      id: "157516849",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 300,
                                      id: "157516850",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307206",
                                      variationId: "157516851",
                                    },
                                  ],
                                  price: 25000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307206",
                                      variationId: "157516849",
                                    },
                                  ],
                                  price: 26000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307206",
                                      variationId: "157516850",
                                    },
                                  ],
                                  price: 30000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 25000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752330",
                            name: "Veg Cheese Saute Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/20de5438-717d-4121-8464-66644a977457_c4b08a37-23ff-41b8-a345-0705f0da6cb2.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307207",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 230,
                                      default: 1,
                                      id: "157516854",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 250,
                                      id: "157516852",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 280,
                                      id: "157516853",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307207",
                                      variationId: "157516854",
                                    },
                                  ],
                                  price: 23000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307207",
                                      variationId: "157516852",
                                    },
                                  ],
                                  price: 25000,
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307207",
                                      variationId: "157516853",
                                    },
                                  ],
                                  price: 28000,
                                },
                              ],
                            },
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 23000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                    ],
                    subtitleSuffix: {},
                    categoryId: "24113332",
                  },
                  {
                    title: "Handi Momos",
                    itemCards: [
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752333",
                            name: "Chicken Handi Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/eb8b50d4-0a82-4621-884b-2522769e41d1_260efdf7-6822-4d87-a765-518d1c18d7dd.jpg",
                            inStock: 1,
                            price: 39000,
                            variants: {},
                            variantsV2: {},
                            addons: [
                              {
                                groupId: "184081070",
                                groupName: "Flavour Sauce",
                                choices: [
                                  {
                                    id: "128499897",
                                    name: "Red Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499896",
                                    name: "White Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499893",
                                    name: "Makhani Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499894",
                                    name: "Pasta Flavoured Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                ],
                                maxAddons: 4,
                                maxFreeAddons: -1,
                              },
                            ],
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752332",
                            name: "Cheese Corn Handi Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/92b12289-1a0c-4fe7-a4bb-e59eac760fc2_fea9a2ad-609d-439a-b3a0-09a62e0645b6.jpg",
                            inStock: 1,
                            isVeg: 1,
                            price: 37000,
                            variants: {},
                            variantsV2: {},
                            addons: [
                              {
                                groupId: "184081069",
                                groupName: "Flavour Sauce",
                                choices: [
                                  {
                                    id: "128499897",
                                    name: "Red Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499896",
                                    name: "White Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499893",
                                    name: "Makhani Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499894",
                                    name: "Pasta Flavoured Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                ],
                                maxAddons: 4,
                                maxFreeAddons: -1,
                              },
                            ],
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752334",
                            name: "Paneer Cheese Handi Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/0c929421-f7b5-49eb-8998-ffc83f42852f_6b6d35a8-2c74-4739-9a12-ecb1dd3c603a.jpg",
                            inStock: 1,
                            isVeg: 1,
                            price: 37000,
                            variants: {},
                            variantsV2: {},
                            addons: [
                              {
                                groupId: "184081071",
                                groupName: "Flavour Sauce",
                                choices: [
                                  {
                                    id: "128499897",
                                    name: "Red Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499896",
                                    name: "White Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499893",
                                    name: "Makhani Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499894",
                                    name: "Pasta Flavoured Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                ],
                                maxAddons: 4,
                                maxFreeAddons: -1,
                              },
                            ],
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752335",
                            name: "Paneer Handi Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/880b2997-9bec-4cd8-879c-9bea1cb1c3cd_fb8f7c0c-a739-438f-b2b9-22c3a81feca9.jpg",
                            inStock: 1,
                            isVeg: 1,
                            price: 35000,
                            variants: {},
                            variantsV2: {},
                            addons: [
                              {
                                groupId: "184081072",
                                groupName: "Flavour Sauce",
                                choices: [
                                  {
                                    id: "128499897",
                                    name: "Red Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499896",
                                    name: "White Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499893",
                                    name: "Makhani Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499894",
                                    name: "Pasta Flavoured Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                ],
                                maxAddons: 4,
                                maxFreeAddons: -1,
                              },
                            ],
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752336",
                            name: "Veg Cheese Handi Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/3714659d-39ec-4758-81d8-30489e7edb6a_add5184f-8bba-4c86-a390-ad5e30634265.jpg",
                            inStock: 1,
                            isVeg: 1,
                            price: 33000,
                            variants: {},
                            variantsV2: {},
                            addons: [
                              {
                                groupId: "184081073",
                                groupName: "Flavour Sauce",
                                choices: [
                                  {
                                    id: "128499897",
                                    name: "Red Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499896",
                                    name: "White Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499893",
                                    name: "Makhani Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499894",
                                    name: "Pasta Flavoured Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                ],
                                maxAddons: 4,
                                maxFreeAddons: -1,
                              },
                            ],
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752337",
                            name: "Veg Handi Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/2c1856c9-ce23-444d-895e-90a6fd64e97d_3a11105d-b755-45d7-95ec-2c05f2084cac.jpg",
                            inStock: 1,
                            isVeg: 1,
                            price: 32000,
                            variants: {},
                            variantsV2: {},
                            addons: [
                              {
                                groupId: "184081074",
                                groupName: "Flavour Sauce",
                                choices: [
                                  {
                                    id: "128499897",
                                    name: "Red Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499896",
                                    name: "White Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499893",
                                    name: "Makhani Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499894",
                                    name: "Pasta Flavoured Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                ],
                                maxAddons: 4,
                                maxFreeAddons: -1,
                              },
                            ],
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                    ],
                    subtitleSuffix: {},
                    categoryId: "54737854",
                  },
                  {
                    title: "Chipotle Cheese Momos",
                    itemCards: [
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752345",
                            name: "Cheese Corn Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/f7b368c4-f868-4d90-b09e-6dad0b55b2f1_c827d5cd-891d-42a0-82ea-11ace5a7984d.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307223",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 330,
                                      default: 1,
                                      id: "157516902",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 350,
                                      id: "157516900",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 390,
                                      id: "157516901",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307223",
                                      variationId: "157516902",
                                    },
                                  ],
                                  price: 33000,
                                  addonCombinations: [
                                    {
                                      groupId: "184081075",
                                      addonId: "128499895",
                                    },
                                    {
                                      groupId: "184081075",
                                      addonId: "128499892",
                                    },
                                  ],
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307223",
                                      variationId: "157516900",
                                    },
                                  ],
                                  price: 35000,
                                  addonCombinations: [
                                    {
                                      groupId: "184081075",
                                      addonId: "128499895",
                                    },
                                    {
                                      groupId: "184081075",
                                      addonId: "128499892",
                                    },
                                  ],
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307223",
                                      variationId: "157516901",
                                    },
                                  ],
                                  price: 39000,
                                  addonCombinations: [
                                    {
                                      groupId: "184081075",
                                      addonId: "128499895",
                                    },
                                    {
                                      groupId: "184081075",
                                      addonId: "128499892",
                                    },
                                  ],
                                },
                              ],
                            },
                            addons: [
                              {
                                groupId: "184081075",
                                groupName: "Choice Of Sauce",
                                choices: [
                                  {
                                    id: "128499895",
                                    name: "Red Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499892",
                                    name: "White Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                ],
                                maxAddons: 1,
                                maxFreeAddons: -1,
                                minAddons: 1,
                              },
                            ],
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 33000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752346",
                            name: "Chicken Cheese Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/38c3c77e-6792-45fd-9a3c-6dc5f8f8a622_1bc2ce44-667f-4fcb-910d-cec091df82bb.jpg",
                            inStock: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307224",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 370,
                                      default: 1,
                                      id: "157516905",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 390,
                                      id: "157516903",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 430,
                                      id: "157516904",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307224",
                                      variationId: "157516905",
                                    },
                                  ],
                                  price: 37000,
                                  addonCombinations: [
                                    {
                                      groupId: "184081076",
                                      addonId: "128499895",
                                    },
                                    {
                                      groupId: "184081076",
                                      addonId: "128499892",
                                    },
                                  ],
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307224",
                                      variationId: "157516903",
                                    },
                                  ],
                                  price: 39000,
                                  addonCombinations: [
                                    {
                                      groupId: "184081076",
                                      addonId: "128499895",
                                    },
                                    {
                                      groupId: "184081076",
                                      addonId: "128499892",
                                    },
                                  ],
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307224",
                                      variationId: "157516904",
                                    },
                                  ],
                                  price: 43000,
                                  addonCombinations: [
                                    {
                                      groupId: "184081076",
                                      addonId: "128499895",
                                    },
                                    {
                                      groupId: "184081076",
                                      addonId: "128499892",
                                    },
                                  ],
                                },
                              ],
                            },
                            addons: [
                              {
                                groupId: "184081076",
                                groupName: "Choice Of Sauce",
                                choices: [
                                  {
                                    id: "128499895",
                                    name: "Red Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499892",
                                    name: "White Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                ],
                                maxAddons: 1,
                                maxFreeAddons: -1,
                                minAddons: 1,
                              },
                            ],
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            defaultPrice: 37000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752347",
                            name: "Chicken Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/edc2626f-960a-42ef-95bf-5d6403a8802b_500c7be9-e25e-4370-bff7-e7d23a47064b.jpg",
                            inStock: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307225",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 350,
                                      default: 1,
                                      id: "157516908",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 370,
                                      id: "157516906",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 410,
                                      id: "157516907",
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307225",
                                      variationId: "157516908",
                                    },
                                  ],
                                  price: 35000,
                                  addonCombinations: [
                                    {
                                      groupId: "184081077",
                                      addonId: "128499895",
                                    },
                                    {
                                      groupId: "184081077",
                                      addonId: "128499892",
                                    },
                                  ],
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307225",
                                      variationId: "157516906",
                                    },
                                  ],
                                  price: 37000,
                                  addonCombinations: [
                                    {
                                      groupId: "184081077",
                                      addonId: "128499895",
                                    },
                                    {
                                      groupId: "184081077",
                                      addonId: "128499892",
                                    },
                                  ],
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307225",
                                      variationId: "157516907",
                                    },
                                  ],
                                  price: 41000,
                                  addonCombinations: [
                                    {
                                      groupId: "184081077",
                                      addonId: "128499895",
                                    },
                                    {
                                      groupId: "184081077",
                                      addonId: "128499892",
                                    },
                                  ],
                                },
                              ],
                            },
                            addons: [
                              {
                                groupId: "184081077",
                                groupName: "Choice Of Sauce",
                                choices: [
                                  {
                                    id: "128499895",
                                    name: "Red Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499892",
                                    name: "White Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                ],
                                maxAddons: 1,
                                maxFreeAddons: -1,
                                minAddons: 1,
                              },
                            ],
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            defaultPrice: 35000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752348",
                            name: "Paneer Cheese Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/d4acf6a4-c1aa-47a8-999a-c97ccd8c8b9c_e0dfa6e0-c54e-4fae-92a4-1632b79f2da3.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307226",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 330,
                                      default: 1,
                                      id: "157516911",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 350,
                                      id: "157516909",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 390,
                                      id: "157516910",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307226",
                                      variationId: "157516911",
                                    },
                                  ],
                                  price: 33000,
                                  addonCombinations: [
                                    {
                                      groupId: "184081078",
                                      addonId: "128499895",
                                    },
                                    {
                                      groupId: "184081078",
                                      addonId: "128499892",
                                    },
                                  ],
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307226",
                                      variationId: "157516909",
                                    },
                                  ],
                                  price: 35000,
                                  addonCombinations: [
                                    {
                                      groupId: "184081078",
                                      addonId: "128499895",
                                    },
                                    {
                                      groupId: "184081078",
                                      addonId: "128499892",
                                    },
                                  ],
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307226",
                                      variationId: "157516910",
                                    },
                                  ],
                                  price: 39000,
                                  addonCombinations: [
                                    {
                                      groupId: "184081078",
                                      addonId: "128499895",
                                    },
                                    {
                                      groupId: "184081078",
                                      addonId: "128499892",
                                    },
                                  ],
                                },
                              ],
                            },
                            addons: [
                              {
                                groupId: "184081078",
                                groupName: "Choice Of Sauce",
                                choices: [
                                  {
                                    id: "128499895",
                                    name: "Red Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499892",
                                    name: "White Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                ],
                                maxAddons: 1,
                                maxFreeAddons: -1,
                                minAddons: 1,
                              },
                            ],
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 33000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752349",
                            name: "Paneer Momos",
                            category: "Momos",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307227",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 320,
                                      default: 1,
                                      id: "157516914",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 330,
                                      id: "157516912",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 370,
                                      id: "157516913",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307227",
                                      variationId: "157516914",
                                    },
                                  ],
                                  price: 32000,
                                  addonCombinations: [
                                    {
                                      groupId: "184081079",
                                      addonId: "128499895",
                                    },
                                    {
                                      groupId: "184081079",
                                      addonId: "128499892",
                                    },
                                  ],
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307227",
                                      variationId: "157516912",
                                    },
                                  ],
                                  price: 33000,
                                  addonCombinations: [
                                    {
                                      groupId: "184081079",
                                      addonId: "128499895",
                                    },
                                    {
                                      groupId: "184081079",
                                      addonId: "128499892",
                                    },
                                  ],
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307227",
                                      variationId: "157516913",
                                    },
                                  ],
                                  price: 37000,
                                  addonCombinations: [
                                    {
                                      groupId: "184081079",
                                      addonId: "128499895",
                                    },
                                    {
                                      groupId: "184081079",
                                      addonId: "128499892",
                                    },
                                  ],
                                },
                              ],
                            },
                            addons: [
                              {
                                groupId: "184081079",
                                groupName: "Choice Of Sauce",
                                choices: [
                                  {
                                    id: "128499895",
                                    name: "Red Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499892",
                                    name: "White Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                ],
                                maxAddons: 1,
                                maxFreeAddons: -1,
                                minAddons: 1,
                              },
                            ],
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 32000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752350",
                            name: "Veg Cheese Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/5e3c5d53-c7f3-4c23-a71b-b253c6538e39_ecd89904-2f0a-4b70-80c6-a055758f8281.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307228",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 300,
                                      default: 1,
                                      id: "157516917",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 320,
                                      id: "157516915",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 350,
                                      id: "157516916",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307228",
                                      variationId: "157516917",
                                    },
                                  ],
                                  price: 30000,
                                  addonCombinations: [
                                    {
                                      groupId: "184081080",
                                      addonId: "128499895",
                                    },
                                    {
                                      groupId: "184081080",
                                      addonId: "128499892",
                                    },
                                  ],
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307228",
                                      variationId: "157516915",
                                    },
                                  ],
                                  price: 32000,
                                  addonCombinations: [
                                    {
                                      groupId: "184081080",
                                      addonId: "128499895",
                                    },
                                    {
                                      groupId: "184081080",
                                      addonId: "128499892",
                                    },
                                  ],
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307228",
                                      variationId: "157516916",
                                    },
                                  ],
                                  price: 35000,
                                  addonCombinations: [
                                    {
                                      groupId: "184081080",
                                      addonId: "128499895",
                                    },
                                    {
                                      groupId: "184081080",
                                      addonId: "128499892",
                                    },
                                  ],
                                },
                              ],
                            },
                            addons: [
                              {
                                groupId: "184081080",
                                groupName: "Choice Of Sauce",
                                choices: [
                                  {
                                    id: "128499895",
                                    name: "Red Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499892",
                                    name: "White Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                ],
                                maxAddons: 1,
                                maxFreeAddons: -1,
                                minAddons: 1,
                              },
                            ],
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 30000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752351",
                            name: "Veg Momos",
                            category: "Momos",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/63c9668b-de2b-4bce-9b54-53b51833b00a_98209c4f-7438-4b1b-9c32-f772ed1101f4.jpg",
                            inStock: 1,
                            isVeg: 1,
                            variants: {},
                            variantsV2: {
                              variantGroups: [
                                {
                                  groupId: "50307229",
                                  name: "Quantity",
                                  variations: [
                                    {
                                      name: "6 Pieces",
                                      price: 280,
                                      default: 1,
                                      id: "157516920",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "8 Pieces",
                                      price: 300,
                                      id: "157516918",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      name: "10 Pieces",
                                      price: 330,
                                      id: "157516919",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                },
                              ],
                              pricingModels: [
                                {
                                  variations: [
                                    {
                                      groupId: "50307229",
                                      variationId: "157516920",
                                    },
                                  ],
                                  price: 28000,
                                  addonCombinations: [
                                    {
                                      groupId: "184081081",
                                      addonId: "128499895",
                                    },
                                    {
                                      groupId: "184081081",
                                      addonId: "128499892",
                                    },
                                  ],
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307229",
                                      variationId: "157516918",
                                    },
                                  ],
                                  price: 30000,
                                  addonCombinations: [
                                    {
                                      groupId: "184081081",
                                      addonId: "128499895",
                                    },
                                    {
                                      groupId: "184081081",
                                      addonId: "128499892",
                                    },
                                  ],
                                },
                                {
                                  variations: [
                                    {
                                      groupId: "50307229",
                                      variationId: "157516919",
                                    },
                                  ],
                                  price: 33000,
                                  addonCombinations: [
                                    {
                                      groupId: "184081081",
                                      addonId: "128499895",
                                    },
                                    {
                                      groupId: "184081081",
                                      addonId: "128499892",
                                    },
                                  ],
                                },
                              ],
                            },
                            addons: [
                              {
                                groupId: "184081081",
                                groupName: "Choice Of Sauce",
                                choices: [
                                  {
                                    id: "128499895",
                                    name: "Red Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                  {
                                    id: "128499892",
                                    name: "White Sauce",
                                    inStock: 1,
                                    isVeg: 1,
                                    isEnabled: 1,
                                  },
                                ],
                                maxAddons: 1,
                                maxFreeAddons: -1,
                                minAddons: 1,
                              },
                            ],
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            defaultPrice: 28000,
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                    ],
                    subtitleSuffix: {},
                    categoryId: "54737856",
                  },
                ],
                categoryId: "24113312",
              },
            },
          },
          {
            card: {
              card: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                title: "Starters",
                categories: [
                  {
                    title: "Non Veg Starters",
                    itemCards: [
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752299",
                            name: "Chilly Chicken",
                            category: "Starters",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/d8867bc9-6c13-4a41-a539-0c353f07ff68_03e36ad6-2676-4c93-bda8-01196639fc6b.jpg",
                            inStock: 1,
                            price: 26000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752298",
                            name: "Chicken Popcorn",
                            category: "Starters",
                            inStock: 1,
                            price: 32000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "87802682",
                            name: "Chicken Pepper Fry",
                            category: "Starters",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/4a134976-3680-47f9-ba12-abde06a7b724_07749fef-dd4c-41b2-bafe-dbb386b8423f.jpg",
                            inStock: 1,
                            price: 35000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "87802740",
                            name: "Chicken Dragon",
                            category: "Starters",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/253a64c4-c5a9-4fa5-a026-eb3f957ed35a_4c073aca-fd79-465c-8b5e-de51756a8424.jpg",
                            inStock: 1,
                            price: 26000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {
                                rating: "4.6",
                                ratingCount: "9 ratings",
                                ratingCountV2: "9",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "87802679",
                            name: "Garlic Chicken",
                            category: "Starters",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/91b59172-5b53-46be-a19d-d8565c599fbe_dd3582af-1204-4b3b-a832-5cea298fcca6.jpg",
                            inStock: 1,
                            price: 28000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752297",
                            name: "Chicken Lollipop [6 Pieces]",
                            category: "Starters",
                            inStock: 1,
                            price: 31000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "87802683",
                            name: "Lemon Chicken",
                            category: "Starters",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/d26c32d1-0d1f-49ee-ba35-b860a293db0d_fa1b7d72-29a0-4fb5-9ae8-e3e0a203b7ac.jpg",
                            inStock: 1,
                            price: 28000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                    ],
                    subtitleSuffix: {},
                    categoryId: "54737851",
                  },
                  {
                    title: "Veg Starters",
                    itemCards: [
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "88382047",
                            name: "Crispy Corn",
                            category: "Starters",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/4151e59b-055f-4621-98b9-2b6c1baff125_7117c005-7576-4197-9666-28c187eed4de.jpg",
                            inStock: 1,
                            isVeg: 1,
                            price: 29000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {
                                rating: "4.7",
                                ratingCount: "5 ratings",
                                ratingCountV2: "5",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "87802743",
                            name: "Chilly Paneer",
                            category: "Starters",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/0cf00fa2-9c09-4dba-9563-4f3114848dfc_388b91ea-9bc5-4e80-bcc5-cd69884e1749.jpg",
                            inStock: 1,
                            isVeg: 1,
                            price: 26000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {
                                rating: "3.7",
                                ratingCount: "12 ratings",
                                ratingCountV2: "12",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752296",
                            name: "Spring Roll",
                            category: "Starters",
                            inStock: 1,
                            isVeg: 1,
                            price: 31000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752295",
                            name: "French Fries",
                            category: "Starters",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/ecc138d9-56e2-4e5e-a4b1-8242c7dbe57e_ba211f24-7369-4e55-9ef8-e93cb6fbac37.jpg",
                            inStock: 1,
                            isVeg: 1,
                            price: 23000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "87802704",
                            name: "Paneer Dragon",
                            category: "Starters",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/599b35bc-f10c-4c90-929a-d64943dd617f_8659bfd1-e615-4281-98dc-4b0ab86bcc62.jpg",
                            inStock: 1,
                            isVeg: 1,
                            price: 28000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {
                                rating: "3.8",
                                ratingCount: "3 ratings",
                                ratingCountV2: "3",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "87802744",
                            name: "Paneer 65",
                            category: "Starters",
                            inStock: 1,
                            isVeg: 1,
                            price: 26000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                    ],
                    subtitleSuffix: {},
                    categoryId: "24113275",
                  },
                ],
                categoryId: "24113274",
              },
            },
          },
          {
            card: {
              card: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                title: "Chinese",
                categories: [
                  {
                    title: "Veg Chinese",
                    itemCards: [
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752304",
                            name: "Veg Hakka Noodles",
                            category: "Chinese",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/cc11c8bc-8ee8-4b90-961b-252a46dfc9a9_e6e420ca-3551-4213-b0f6-572ad4dceaa3.jpg",
                            inStock: 1,
                            isVeg: 1,
                            price: 26000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752307",
                            name: "Veg Schezwan Noodles",
                            category: "Chinese",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/5e28a963-e046-4413-8a30-2f9947ea0863_c200da8d-dcd1-49a9-8f25-56f7d661e2d5.jpg",
                            inStock: 1,
                            isVeg: 1,
                            price: 26000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "87802730",
                            name: "Dry Manchurian",
                            category: "Chinese",
                            inStock: 1,
                            isVeg: 1,
                            price: 15000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {
                              text: "Bestseller",
                              textColor: "#ffffff",
                              topBackgroundColor: "#d53d4c",
                              bottomBackgroundColor: "#b02331",
                            },
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            isBestseller: true,
                            ratings: {
                              aggregatedRating: {
                                rating: "3.5",
                                ratingCount: "9 ratings",
                                ratingCountV2: "9",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752301",
                            name: "Veg Chilly Garlic Noodles",
                            category: "Chinese",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/2faaed81-319d-4496-ac71-091e60150642_9a74327a-aba8-435b-a145-3c2c59c19677.jpg",
                            inStock: 1,
                            isVeg: 1,
                            price: 28000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752303",
                            name: "Veg Fried Rice",
                            category: "Chinese",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/a8927146-5e86-49dc-ac38-c87cc7f29087_8e08e71c-5600-4d50-b186-6d017b1c4796.jpg",
                            inStock: 1,
                            isVeg: 1,
                            price: 26000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752308",
                            name: "Veg Schezwan Rice",
                            category: "Chinese",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/a092fe6e-81fc-433f-a597-beb794f4dacc_46819a1b-766f-465b-8392-1bc34aa84f99.jpg",
                            inStock: 1,
                            isVeg: 1,
                            price: 26000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752300",
                            name: "Chinese Combi",
                            category: "Chinese",
                            inStock: 1,
                            isVeg: 1,
                            price: 26000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "87802624",
                            name: "Veg Kothe",
                            category: "Chinese",
                            inStock: 1,
                            isVeg: 1,
                            price: 21000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {
                                rating: "2.4",
                                ratingCount: "4 ratings",
                                ratingCountV2: "4",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "94990287",
                            name: "Gravy Manchurian",
                            category: "Chinese",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/edbf8ee4-0f12-430e-acbb-6413864e80fc_7678113b-b4e5-4c93-8738-94cc19ab0314.jpg",
                            inStock: 1,
                            isVeg: 1,
                            price: 18000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {
                                rating: "3.0",
                                ratingCount: "5 ratings",
                                ratingCountV2: "5",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "87802745",
                            name: "Honey Chilly Potato",
                            category: "Chinese",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/a68be1bf-2149-42dd-b0be-f15605e32ac5_d632cc10-8e0a-449a-9f48-036b80a50c93.jpg",
                            inStock: 1,
                            isVeg: 1,
                            price: 23000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {
                                rating: "3.8",
                                ratingCount: "16 ratings",
                                ratingCountV2: "16",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752302",
                            name: "Veg Chilly Garlic Rice",
                            category: "Chinese",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/e3cbf71e-969b-43bf-9b2c-ce4c7068ada8_19083043-5769-47e3-81a3-86d3c92c6a1e.jpg",
                            inStock: 1,
                            isVeg: 1,
                            price: 28000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752305",
                            name: "Veg Hakka Rice",
                            category: "Chinese",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/1100fdd9-0ad2-4795-9cf9-b0f45c7df54d_f1db7caf-8ed5-4e8b-9924-7db66e29c3b9.jpg",
                            inStock: 1,
                            isVeg: 1,
                            price: 26000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752306",
                            name: "Veg Noodles",
                            category: "Chinese",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/0048a6bc-dd4e-4993-80d6-9f61bd3d84e9_5469d980-bb48-4da2-9f41-82d80a18356c.jpg",
                            inStock: 1,
                            isVeg: 1,
                            price: 26000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                    ],
                    subtitleSuffix: {},
                    categoryId: "24113288",
                  },
                  {
                    title: "Non Veg Chinese",
                    itemCards: [
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752309",
                            name: "Chicken Chilly Garlic Noodles",
                            category: "Chinese",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/33d8b239-2241-44f9-a49d-b7e0ec3f82eb_f2ff4263-ded2-45a1-b580-acefd4eaa0fe.jpg",
                            inStock: 1,
                            price: 31000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752312",
                            name: "Chicken Gravy Manchurian",
                            category: "Chinese",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/7dc42588-b17a-4130-848a-d6479607ff3b_addb0681-3ffe-4515-b6f4-1adc2cfac911.jpg",
                            inStock: 1,
                            price: 32000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "87802728",
                            name: "Chicken Manchurian",
                            category: "Chinese",
                            inStock: 1,
                            price: 31000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752316",
                            name: "Chicken Schezwan Rice",
                            category: "Chinese",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/0904b75e-a36e-4ef8-9862-5280e2ab6604_2c87d156-0e2f-41f8-b873-07b048124c55.jpg",
                            inStock: 1,
                            price: 29000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752310",
                            name: "Chicken Chilly Garlic Rice",
                            category: "Chinese",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/d337fd00-c99c-427c-b2fe-1b9ec9098c64_d46fdfc0-c369-4011-b66c-e5133071efb9.jpg",
                            inStock: 1,
                            price: 31000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "87802727",
                            name: "Chicken Rice",
                            category: "Chinese",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/e223cf64-ecea-440d-9000-5076687f8814_8201fa09-543c-4255-86b5-bb89849f3833.jpg",
                            inStock: 1,
                            price: 29000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "87802726",
                            name: "Chicken Noodles",
                            category: "Chinese",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/28fbd124-0287-4fdd-b268-5f1f4e41caba_678e15f7-4185-4845-abdc-bfcf58cbff1a.jpg",
                            inStock: 1,
                            price: 29000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {
                                rating: "4.1",
                                ratingCount: "4 ratings",
                                ratingCountV2: "4",
                              },
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752311",
                            name: "Chicken Combi",
                            category: "Chinese",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/4632a169-2fcb-42ad-b76e-5de2655738bd_d1c73e30-afd9-4382-954f-5fa44f7c2fff.jpg",
                            inStock: 1,
                            price: 31000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752313",
                            name: "Chicken Hakka Noodles",
                            category: "Chinese",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/d7a75956-7417-4dd2-ab9d-03cca42a444c_72309586-4805-4d5d-8e95-77106c712013.jpg",
                            inStock: 1,
                            price: 29000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752314",
                            name: "Chicken Hakka Rice",
                            category: "Chinese",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/bccccd9d-1007-48d2-baee-259ba216e0d0_63394d4a-005f-42fd-89e8-22d22171549f.jpg",
                            inStock: 1,
                            price: 29000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752315",
                            name: "Chicken Schezwan Noodles",
                            category: "Chinese",
                            imageId:
                              "FOOD_CATALOG/IMAGES/CMS/2025/1/21/8e774d3b-646f-4ddc-baa6-f4a868d5ec71_68508cba-ab52-4ae9-9960-8ac6a10011a1.jpg",
                            inStock: 1,
                            price: 29000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                    ],
                    subtitleSuffix: {},
                    categoryId: "54737852",
                  },
                ],
                categoryId: "24113287",
              },
            },
          },
          {
            card: {
              card: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                title: "Platters",
                categories: [
                  {
                    title: "Veg Platters",
                    itemCards: [
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752354",
                            name: "Veg Mogamboo Momos Platter [ 14 Pieces ]",
                            category: "Platters",
                            description:
                              "( Kurkure 4, Freid 4, Steam 3, Saute 3, )",
                            inStock: 1,
                            isVeg: 1,
                            price: 47000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {
                              text: "Bestseller",
                              textColor: "#ffffff",
                              topBackgroundColor: "#d53d4c",
                              bottomBackgroundColor: "#b02331",
                            },
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            isBestseller: true,
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752355",
                            name: "Veg Tandoori Momos Platter [ 16 Pieces ]",
                            category: "Platters",
                            description:
                              "( Banjara 4, Malai 4 , Haryali 4 , Tikka 4,)",
                            inStock: 1,
                            isVeg: 1,
                            price: 53000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "95004202",
                            name: "Veg Tandoori Platter",
                            category: "Platters",
                            description:
                              "( Paneer Malai  Tikka 4 ,Veg Kebab 4 , Veg Seekh Kebab 4 , Tandoori Salad ,Mashroom Tikka 4 )",
                            inStock: 1,
                            isVeg: 1,
                            price: 70000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752352",
                            name: "Starter Platter",
                            category: "Platters",
                            description:
                              "Crispy Corn , Veg Cheese Potato(With Gravy), Chinese Spring Roll, Chana Chilly , Peri Peri Fries",
                            inStock: 1,
                            isVeg: 1,
                            price: 70000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752353",
                            name: "Veg Chinese Platter",
                            category: "Platters",
                            description:
                              "( Combi , Dry  Manchurian , Chilly Paneer , Panner 65 , Honey Chilly Potato )",
                            inStock: 1,
                            isVeg: 1,
                            price: 52000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752356",
                            name: "Veg USP Platter",
                            category: "Platters",
                            description:
                              "( Tandoori Wrap 2 Pc , Veg Cheese Kurkure 4 , Paneer Tikka 4 , Veg Seekh Kabab 4 , Paneer  Kasto 4, Soup )",
                            inStock: 1,
                            isVeg: 1,
                            price: 87000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "VEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                    ],
                    subtitleSuffix: {},
                    categoryId: "54737858",
                  },
                  {
                    title: "Non Veg Platters",
                    itemCards: [
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752357",
                            name: "Chicken Mogambo Momos Platter [ 14 Pieces ]",
                            category: "Platters",
                            description:
                              "( Kurkure 4, Freid 4, Steam 3, Saute 3, )",
                            inStock: 1,
                            price: 52000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "95004189",
                            name: "Chicken Chinese Platter",
                            category: "Platters",
                            description:
                              "( Combi , Chicken Manchurien , Chili Chicken , Chicken 65 , Chicken Dragon )",
                            inStock: 1,
                            price: 70000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "95004204",
                            name: "Chicken Tandoori Platter",
                            category: "Platters",
                            description:
                              "( Chicken Tandgi 1 , Chicken Tikka 4 ,Chicken Mirchi Tikka 4 , Chicken Seekh Kabab 4 , Chicken Reshmi Kabab 4 , )",
                            inStock: 1,
                            price: 100000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752358",
                            name: "Chicken Tandoori Momos Platter [ 16 Pieces ]",
                            category: "Platters",
                            description:
                              "( Banjara 4, Malai 4 , Haryali 4 , Tandoori Tikka 4,)",
                            inStock: 1,
                            price: 56000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                      {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                          info: {
                            id: "154752359",
                            name: "Non Veg USP Platter",
                            category: "Platters",
                            description:
                              "( Wrap 2 , Chicken Kurkure 4 , Chicken Tikka 4 , Chicken Seekh Kabab 4 , Chicken Kasto 4, )",
                            inStock: 1,
                            price: 105000,
                            variants: {},
                            variantsV2: {},
                            itemAttribute: {
                              vegClassifier: "NONVEG",
                            },
                            ribbon: {},
                            type: "ITEM",
                            itemBadge: {},
                            badgesV2: {},
                            ratings: {
                              aggregatedRating: {},
                            },
                          },
                          analytics: {},
                          hideRestaurantDetails: true,
                        },
                      },
                    ],
                    subtitleSuffix: {},
                    categoryId: "54737859",
                  },
                ],
                categoryId: "54737857",
              },
            },
          },
          {
            card: {
              card: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                type: "FSSAI",
                imageId: "fssai_final_edss9i",
                text: ["License No. 21421010003319"],
              },
            },
          },
          {
            card: {
              card: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                name: "Ma Se Momos",
                area: "TT Nagar",
                completeAddress:
                  "F-3, 1250 near Tarun pushkar swimming pool, Tulsi Nagar, Bhopal, Madhya Pradesh 462003",
              },
            },
          },
        ],
      },
    },
  },
};

export default cardsresponse;
