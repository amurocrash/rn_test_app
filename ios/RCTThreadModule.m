#import "RCTThreadModule.h"
#import <React/RCTLog.h>

@implementation RCTThreadModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE(ThreadModule)

RCT_EXPORT_METHOD(test:(NSString*)name location:(NSString*)location) {
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
