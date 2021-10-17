import S from '@sanity/desk-tool/structure-builder';
import React from 'react';
import { FcShop } from 'react-icons/fc';
import { BsCart4 } from 'react-icons/bs';
import { IoLogoOctocat } from 'react-icons/io';
import { BiCategoryAlt } from 'react-icons/bi';
import { FaRegHandshake } from 'react-icons/fa';

const pageEditViews = (page) => [
  S.view.form().icon(GrEdit),
  S.view.component(SitePreview).icon(GrView).options({ page }).title('Preview'),
];

const singleItem = ({ schemaType, id, title, icon }) =>
  S.listItem({ schemaType, title, id, icon }).child(
    S.editor().id(id).title(title).schemaType(schemaType)
  );

const pageItem = ({ schemaType, id, title, icon, slug }) =>
  S.documentListItem({ schemaType, id, title, icon }).child(
    S.editor()
      .schemaType(schemaType)
      .views([
        S.view.form().icon(GrEdit),
        S.view
          .component(SitePreview)
          .icon(GrView)
          .options({ slug })
          .title('Preview'),
      ])
  );

export default () =>
  S.list()
    .title('Content')
    .items([
      S.documentListItem()
        .schemaType('site')
        .id('site')
        .title('Site')
        .child(S.editor().schemaType('site').title('Site')),
      S.divider(),

      S.listItem()
        .title('Shop')
        .icon(FcShop)
        .child(
          S.list()
            .title('Shop')
            .items([
              S.documentTypeListItem('product').title('Product').icon(BsCart4),
              S.documentTypeListItem('brand')
                .title('Brand')
                .icon(IoLogoOctocat),
              S.documentTypeListItem('category')
                .title('Category')
                .icon(BiCategoryAlt),
              S.documentTypeListItem('deal').title('Deal').icon(FaRegHandshake),
            ])
        ),
    ]);
