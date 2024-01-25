// RCTCalendarModule.m
#import "RCTCalendarModule.h"
#import <React/RCTLog.h>
#import <EventKit/EventKit.h>
@implementation RCTCalendarModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)title startDate:(NSDate *)startDate endDate:(NSDate *)endDate)
{
    RCTLogInfo(@"Pretending to create an event");
  EKEventStore *eventStore = [[EKEventStore alloc] init];

      // Request access to the calendar
      [eventStore requestAccessToEntityType:EKEntityTypeEvent
                                 completion:^(BOOL granted, NSError *error) {
           if (granted) {
               // Create and configure the event
               EKEvent *event = [EKEvent eventWithEventStore:eventStore];
               event.title = title;
               event.startDate = startDate;
               event.endDate = endDate;

               // Save the event to the calendar
               NSError *saveError = nil;
               [eventStore saveEvent:event span:EKSpanThisEvent error:&saveError];

               if (!saveError) {
                 RCTLogInfo(@"Event added to calendar successfully.");
               } else {
                 RCTLogInfo(@"Error adding event to calendar: %@", saveError);
               }
           } else {
             RCTLogInfo(@"Permission denied to access calendar.");
           }
       }];

  
}

@end
