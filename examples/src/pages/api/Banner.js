import React from 'react';

import Layout from '../../components/Layout';

export default function BannerApiPage() {
  return (
    <Layout title="Banner API">
      <h1>
        <code>Banner</code>
      </h1>

      <p>
        The <code>Banner</code> component adds a banner to the generated map.
      </p>

      <h2>Props</h2>
      <ul>
        <li>
          <code>bannerColor</code> (string): Hex code of the background color to
          use for the banner, without the leading <code>#</code> sign.
        </li>
        <li>
          <code>position</code> (string, default: <code>bottom</code>): The position of the banner. Valid
          options are:
          <ul>
            <li>
              <code>bottom</code>
            </li>
            <li>
              <code>top</code>
            </li>
          </ul>
        </li>
        <li>
          <code>size</code> (string): The size of the banner. Valid options are:
          <ul>
            <li>
              <code>sm</code>
            </li>
            <li>
              <code>md</code>
            </li>
            <li>
              <code>lg</code>
            </li>
          </ul>
        </li>
        <li>
          <code>text</code> (string): The text of the banner.
        </li>
        <li>
          <code>textColor</code> (string): Hex code of the text color to use for
          the banner, without the leading <code>#</code> sign.
        </li>
      </ul>
    </Layout>
  );
}
