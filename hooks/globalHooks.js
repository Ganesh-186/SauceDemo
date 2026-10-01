import { test } from '../fixture/fixtureClass';
import { logger } from '../utils/logger';

test.beforeEach(async({loginPage}, testInfo)=>{
    logger.info(`${testInfo.title} Started`)
    await loginPage.navigate();
})
test.afterEach(async({},testInfo)=>{
    logger.info(`${testInfo.title} Ended`)

})
export {test};