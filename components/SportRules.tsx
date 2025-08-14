import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const sportsRulesData = {
  sportsRules: [
    {
      id: "football",
      title: "FOOTBALL",
      sections: [
        {
          subtitle: "NFL",
          rules: [
            "Team totals for the second half include overtime.",
            "4th quarter lines do not include overtime.",
            "Double result pools consist of the winner of the 1st half and the winner of the game (overtime not included unless otherwise specified)",
            "1st scoring play and margin of victory pools include overtime (unless otherwise specified)",
            "Due to Covid-19 for 2020-21 season all games schedule prior the start of the season will have action regardless if there is a change of dates as long as they play on the specified location (THIS RULE APPLIES FOR GAMES THAT WERE OFFERED BEFORE THE START OF THE REGULAR SEASON).",
            "2nd Half and each quarter must be completed in full to be considered action.",
            "2nd half bets always include overtime.",
            "Teams must play all 17 regular season games for action, if a game ties it will be considered half a win for each team.",
          ],
        },
        {
          subtitle: "CFB",
          rules: [
            "Team totals for the second half include overtime.",
            "4th quarter lines do not include overtime.",
            "Double result pools consist of the winner of the 1st half and the winner of the game.",
            "1st scoring play and margin of victory pools include overtime. Double result pools DO NOT include overtime.",
            "2nd Half and each quarter must be completed in full to be considered action.",
            "2nd half bets always include overtime.",
          ],
        },
      ],
    },
    {
      id: "basketball",
      title: "BASKETBALL",
      sections: [
        {
          subtitle: "NBA",
          rules: [
            "Team totals for the second half include overtime.",
            "4th quarter lines do not include overtime.",
            "Double result pools consist of the winner of the 1st half and the winner of the game.",
            "Both double result and margin of victory pools include overtime.",
            "2nd half bets always include overtime.",
          ],
        },
      ],
    },
    {
      id: "baseball",
      title: "BASEBALL",
      sections: [
        {
          subtitle: "General Rules",
          rules: [
            "Standard baseball betting rules apply.",
            "Games must go at least 9 innings (8.5 if home team is winning) for action.",
            "Suspended games will be treated as official if resumed within 36 hours.",
          ],
        },
      ],
    },
    {
      id: "softball",
      title: "SOFTBALL, LITTLE LEAGUE AND OTHER BASEBALL LEAGUES",
      sections: [
        {
          subtitle: "General Rules",
          rules: [
            "Similar rules to baseball apply with sport-specific modifications.",
            "Games must be completed according to league regulations for action.",
          ],
        },
      ],
    },
    {
      id: "hockey",
      title: "HOCKEY",
      sections: [
        {
          subtitle: "General Rules",
          rules: [
            "Games must be completed for action.",
            "Overtime and shootouts count for game winner but not regulation time bets.",
            "Period bets are for regulation time only unless specified.",
          ],
        },
      ],
    },
    {
      id: "soccer",
      title: "SOCCER",
      sections: [
        {
          subtitle: "General Rules",
          rules: [
            "All bets are for 90 minutes plus stoppage time unless otherwise specified.",
            "Extra time and penalty shootouts do not count unless specified.",
            "Match must be completed for action.",
          ],
        },
      ],
    },
    {
      id: "golf",
      title: "GOLF",
      sections: [
        {
          subtitle: "Tournament Rules",
          rules: [
            "Tournament must be completed for action.",
            "Players must tee off for matchup bets to have action.",
            "Weather delays do not void bets if tournament is completed.",
          ],
        },
      ],
    },
    {
      id: "handball",
      title: "HANDBALL",
      sections: [
        {
          subtitle: "General Rules",
          rules: [
            "Match must be completed for action.",
            "Overtime counts for game winner unless specified otherwise.",
          ],
        },
      ],
    },
    {
      id: "boxing",
      title: "BOXING / MIXED MARTIAL ARTS (MMA) / UFC",
      sections: [
        {
          subtitle: "Fight Rules",
          rules: [
            "Fight must take place for action.",
            "Change of venue or date within reasonable time frame does not void bets.",
            "If fighter fails to make weight, bets may be voided depending on circumstances.",
          ],
        },
      ],
    },
    {
      id: "tennis",
      title: "TENNIS",
      sections: [
        {
          subtitle: "Match Rules",
          rules: [
            "Match must be completed for action.",
            "Retirement or disqualification settles bets on the advancing player.",
            "Change of surface or venue voids all bets.",
          ],
        },
      ],
    },
    {
      id: "autoracing",
      title: "AUTORACING",
      sections: [
        {
          subtitle: "Race Rules",
          rules: [
            "Race must be completed for action.",
            "Official results determine winners.",
            "Weather delays do not void bets if race is completed.",
          ],
        },
      ],
    },
    {
      id: "cricket",
      title: "CRICKET",
      sections: [
        {
          subtitle: "General",
          rules: [
            "All wagers will be settled using the official result as declared by the relevant governing body of the match or competition concerned.",
          ],
        },
        {
          subtitle: "Change of Venue",
          rules: [
            "If a match venue is changed then bets already placed will stand providing the home team is still designated as such. If the home and away team for a listed match are reversed then bets placed based on the original listing will be void.",
            "If a match is abandoned due to outside interference, bets on the outcome for the total of the game are voided, if no winner is declared from the official site all bets on the winner of the match are voided.",
            "If a match is affected by external factors (such as bad weather), we will settle your bet based on the official competition rule (this includes matches affected by a mathematical calculation such as the Duckworth-Lewis method (DL) or the Jayadevan system (VJD)).",
          ],
        },
        {
          subtitle: "Test Matches",
          rules: [
            "In case the game did not go at least 4 innings all bets on the outcome for the over/under are voided.",
            "In case the game did not go at least 4 innings all bets on the outcome for the winner of the match are settled based on the official announcement",
            "Tied Test Match: In the event of a tied test match (where all innings have been completed and both teams have the same score) all bets on the game will be voided.",
            "If a three-way money line with the draw as the third betting option is offered, only those bettors who wagered on the draw will be paid as winners; those who wagered on either team or contestant to win will lose their stake.",
            "If a test match is abandoned or disrupted by outside interference (riot, etc.) all bets on this match are void.",
          ],
        },
        {
          subtitle: "One Day Internationals",
          rules: [
            "In case the game did not go at least the official number of overs, all bets on the outcome for the over/under are voided.",
            "In case the game did not go at least the official number of overs, all bets on the outcome for the winner of the match are settled based on the official announcement.",
            "In matches where a reserve day is used all wagers will stand and carry over to the reserve day.",
          ],
        },
        {
          subtitle: "Twenty/20",
          rules: [
            "In case the game did not go at least the official number of overs, all bets on the outcome for the over/under are voided.",
            "In case the game did not go at least the official number of overs, all bets on the outcome for the winner of the match are settled based on the official announcement.",
          ],
        },
      ],
    },
    {
      id: "olympics",
      title: "OLYMPIC RULES",
      sections: [
        {
          subtitle: "General Olympics Rules",
          rules: [
            "For multi-way futures betting, all events are ALL ACTION – no refunds.",
            "If a particular athlete/team has a yes/no (2-way) price to win the gold medal, then that athlete/team must start competition for action.",
            "For Match-Up betting between two athletes / 2 Countries in any event, both athletes /countries must start event for action.",
            "For over/under on a countries total medals within a sport, the total is for both the men's and women's competitions within that area – Example: If USA wins 10 medals in men's athletics and 9 in women's athletics, the total medals won by the USA is 19 in Athletics.",
            "Events are official after the original medal ceremony. Any subsequent changes to those results do not count.",
            "For props on individual athletes, competitor must start the first event they are scheduled to participate for action.",
          ],
        },
      ],
    },
    {
      id: "esports",
      title: "E-SPORTS RULES",
      sections: [
        {
          subtitle: "General E-Sports Rules",
          rules: [
            "The start dates and times displayed on our website for E-Sport matches are an indication only and are not guaranteed to be correct. If a match is suspended or postponed, and not resumed within 12 hours from the actual scheduled start time, then wagers on the match will have no action and be refunded.",
            "The exception being any wager on whether a team/player advances in a tournament, or wins the tournament, will have action regardless of a suspended or postponed match.",
            "If the name of a player/team is misspelled, all bets will stand unless it is obvious it is the wrong object.",
            "If in an official match a player plays with the wrong nickname or on a smurf-account, the result is still valid unless it is evident that it is not the player that was supposed to play that match.",
            "All wagers will be settled using the official result as declared by the relevant governing body of the competition concerned.",
            "If a draw option has not been made available, then extra time will count, if played.",
          ],
        },
        {
          subtitle: "Handicap Betting",
          rules: [
            "A spread in E-Sports can be Rounds/Maps or other counting measures dependent on the game. The spread will only be referred to as the spread. (For example, in Counter Strike the spread will be rounds won, while in Starcraft 2 the spread would be maps).",
            "Handicapping is a way of making a sports contest more even and thus more interesting as a betting object. In E-Sports betting, this is done by awarding one of the teams/players, the underdog, some maps/rounds ahead.",
          ],
        },
      ],
    },
    {
      id: "volleyball",
      title: "VOLLEYBALL RULES",
      sections: [
        {
          subtitle: "General Volleyball Rules",
          rules: [
            "If a match is suspended before full time is reached, and not completed the same day, wagers on the outcome of the match are considered canceled and all wagers shall be refunded.",
            "For match and set wagering, the actual number of points played in a set will not affect how wagers are graded. For example, sets played to 21 points or 25 points are graded based on the winner of the set.",
            'In case of a "Home and Away" format bets on the Away match do not include the "Golden Set".',
          ],
        },
      ],
    },
    {
      id: "waterpolo",
      title: "WATER POLO RULES",
      sections: [
        {
          subtitle: "Water Polo Rules",
          rules: [
            "2-Way: Unless otherwise stated, all wagers are for regulation time only and do not include either overtime or penalty shootouts.",
            "Winner of 1st, 2nd 3rd 4th Quarter: Only the goals scored within the nominated period count. Unless otherwise stated, overtime does not count for the result of the 4th period.",
            'In case of a "Home and Away" format bets on the Away match do not include the "Golden Set".',
          ],
        },
      ],
    },
    {
      id: "minorsports",
      title: "OTHER MINOR SPORTS",
      sections: [
        {
          subtitle:
            "Badminton, Bandy, Beach Soccer, Curling, Darts, Futsal, Lacrosse, Snooker, etc.",
          rules: [
            "Games or matches must be completed in order to have action, changes of date or venue will be considered no action.",
          ],
        },
      ],
    },
  ],
};

const officialGameTimes = [
  { sport: "Pro Football", time: "55 minutes of play" },
  { sport: "College Football", time: "55 minutes of play" },
  {
    sport: "Basketball",
    time: "All competitions/leagues except the NBA must go at least 35 minutes for action unless otherwise specified.",
  },
  { sport: "Pro Basketball", time: "43 minutes of play" },
  { sport: "College Basketball", time: "35 minutes of play" },
  { sport: "Hockey", time: "55 minutes of play" },
  {
    sport: "Baseball Sides",
    time: "5 innings (4 ½ if the home team is winning)",
  },
  {
    sport: "Baseball Totals",
    time: "9 innings (8 ½ if the home team is winning)",
  },
  { sport: "Run Lines", time: "9 innings (8 ½ if the home team is winning)" },
  { sport: "Tennis", time: "ONE ball served" },
  {
    sport: "Soccer",
    time: "If a match is suspended before full time is reached, and not completed the same day, wagers on the outcome of the match are considered void and all wagers will be refunded. Includes Goal Lines, Money lines and Totals.",
  },
];

const SportsRulesAccordion = () => {
  const [openSport, setOpenSport] = useState(null);

  const toggleSport = (sportId: any) => {
    setOpenSport(openSport === sportId ? null : sportId);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 ">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brand-primary-green mb-6">
          Sports Rules
        </h1>

        {/* General Rules Section */}
        <div className=" rounded-lg p-6 mb-6 ">
          <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
            Related to Sporting Events
          </h2>
          <ul className="space-y-3 text-brand-smoke-gray ">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                All sporting events must be played on date and site scheduled
                unless otherwise specified. Exceptions: Auto Racing, Golf,
                Tennis, MMA, UFC and Boxing.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-green-400  rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                Auto Racing, Golf, Tennis, MMA, UFC and Boxing are not subject
                to this rule. The wagers will remain valid subject to the Ruling
                Body of each sport cancelling the event.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-green-400  rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                If any event is postponed and/or rescheduled, the event will
                automatically constitute "no action".
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-green-400  rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                We do not recognize suspended games, protests or overturned
                decisions for wagering purposes.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-green-400  rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                Las Vegas rules apply to any wager not covered by rules and
                regulations in here.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-green-400  rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                For Cycling events riders might be issued the same time but they
                will be issued an order of finish that is decided by photo
                finish. Results will be taken from the official finishing
                position in the events main web site.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-green-400  rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                For all props on players or teams we will use the official
                website of the sporting event to declare the winner. Examples:
                WWW.NFL.COM, WWW.NBA.COM etc. For events that do not have an
                associated website we will use WWW.ESPN.COM for results.
              </span>
            </li>
          </ul>
        </div>

        {/* For All Sports Section */}
        <div className=" rounded-lg p-6 mb-6 ">
          <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
            For all sports and events:
          </h2>
          <ul className="space-y-3 text-brand-smoke-gray ">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-green-400  rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                We reserve the right to cancel any wager accepted when the line
                was obviously posted incorrectly.{" "}
                <span className="font-semibold">(BAD LINE RULE)</span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-green-400  rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                Wagers will also be cancelled when there is proof of cheating,
                attempted hacking or knowledgeable deceit.{" "}
                <span className="font-semibold">(CHEATING RULE)</span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-green-400  rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                We also reserve the right to cancel wagers placed after a game
                is final or an outcome can be deduced from the score.{" "}
                <span className="font-semibold">(BAD TIME RULE)</span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-green-400  rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                Matchups that are posted incorrectly will be automatically
                cancelled. These include wrong participants and matchup
                incorrectly entered into the system.{" "}
                <span className="font-semibold">(WRONG MATCHUP RULE)</span>
              </span>
            </li>
          </ul>
        </div>

        {/* Official Game Times Table */}
        <div className=" rounded-lg p-6 mb-6 ">
          <h2 className="text-xl font-semibold text-brand-primary-green mb-3">
            The following table tells you when a game becomes official for
            betting purposes:
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody>
                {officialGameTimes.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-600 last:border-b-0"
                  >
                    <td className="py-3 px-4 text-brand-smoke-gray  font-medium border-r border-slate-600 w-1/3">
                      {row.sport}
                    </td>
                    <td className="py-3 px-4 text-brand-smoke-gray bg-slate-750">
                      {row.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Sports Rules Accordion */}
      <div className="space-y-0 rounded-lg overflow-hidden">
        {sportsRulesData.sportsRules.map((sport) => (
          <div
            key={sport.id}
            className="border-b border-slate-700 last:border-b-0"
          >
            <button
              onClick={() => toggleSport(sport.id)}
              className="w-full px-6 py-4 text-left  hover:bg-slate-750 transition-colors duration-200 flex items-center justify-between group"
            >
              <h2 className="text-brand-primary-green text-lg font-semibold tracking-wide">
                {sport.title}
              </h2>
              <div className="transition-transform duration-200">
                {openSport === sport.id ? (
                  <ChevronUp className="w-5 h-5 text-brand-smoke-gray " />
                ) : (
                  <ChevronDown className="w-5 h-5 text-brand-smoke-gray " />
                )}
              </div>
            </button>

            {openSport === sport.id && (
              <div className=" border-t border-slate-600">
                <div className="px-6 py-4 space-y-6">
                  {sport.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      {section.subtitle && (
                        <h3 className="text-brand-primary-green text-base font-medium mb-3 italic">
                          {section.subtitle}
                        </h3>
                      )}
                      <ul className="space-y-2">
                        {section.rules.map((rule, ruleIndex) => (
                          <li
                            key={ruleIndex}
                            className="text-brand-smoke-gray  text-sm leading-relaxed flex items-start"
                          >
                            <span className="inline-block w-2 h-2 bg-green-400  rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsRulesAccordion;
