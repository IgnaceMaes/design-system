import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | hds/pagination/info', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the component', async function (assert) {
    await render(hbs`
      <Hds::Pagination::Info @itemsRangeStart={{1}} @itemsRangeEnd={{10}} @totalItems={{100}} />
    `);
    assert.dom(this.element).exists();
  });

  test('it should render with a CSS class that matches the component name', async function (assert) {
    await render(hbs`
      <Hds::Pagination::Info @itemsRangeStart={{1}} @itemsRangeEnd={{10}} @totalItems={{100}} id="test-pagination-info" />
    `);
    assert.dom('#test-pagination-info').hasClass('hds-pagination-info');
  });

  // Test API:

  test('it should show the passed in itemsRangeStart and itemsRangeEnd values', async function (assert) {
    await render(hbs`
      <Hds::Pagination::Info @itemsRangeStart={{1}} @itemsRangeEnd={{10}} @totalItems={{103}} />
    `);
    assert.dom('.hds-pagination-info').hasText('1–10 of 103');
  });

  test('it should display the totalItems by default', async function (assert) {
    await render(hbs`
      <Hds::Pagination::Info @itemsRangeStart={{1}} @itemsRangeEnd={{10}} @totalItems={{100}} />
    `);
    assert.dom('.hds-pagination-info').includesText('of 100');
  });

  test('it should not display the totalItems when showTotalItems is set to false', async function (assert) {
    await render(hbs`
    <Hds::Pagination::Info @itemsRangeStart={{1}} @itemsRangeEnd={{10}} @totalItems={{100}} @showTotalItems={{false}} />
    `);
    assert.dom('.hds-pagination-info').doesNotIncludeText('of 100');
  });
});
