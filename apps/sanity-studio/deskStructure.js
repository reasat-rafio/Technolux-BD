import S from '@sanity/desk-tool/structure-builder';
import React from 'react';
import { FcShop } from 'react-icons/fc';
import { BsCart4 } from 'react-icons/bs';
import { IoLogoOctocat } from 'react-icons/io';
import { BiCategoryAlt } from 'react-icons/bi';
import { FaRegHandshake } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { GrEdit, GrView } from 'react-icons/gr';

function SitePreview({ document, options }) {
  if (!process.env.SANITY_STUDIO_PREVIEW_URL) {
    console.warn(
      'SANITY_STUDIO_PREVIEW_URL should be set for preview to work! Falling back to localhost:3000'
    );
  }
  return (
    <iframe
      src={`${
        process.env.SANITY_STUDIO_PREVIEW_URL ?? 'http://localhost:3000'
      }/api/preview?secret=${process.env.SANITY_STUDIO_PREVIEW_TOKEN}&slug=${
        options.slug
      }`}
      style={{ width: '100%', height: '100%', border: 0 }}
    />
  );
}

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

      S.divider(),

      S.listItem()
        .title('Pages')
        .icon(CgWebsite)
        .child(
          S.list()
            .title('Pages')
            .items([
              pageItem({
                schemaType: 'landingPage',
                id: 'landingPage',
                title: 'Landing',
                icon: FaHome,
                slug: '',
              }),
            ])
        ),
    ]);
