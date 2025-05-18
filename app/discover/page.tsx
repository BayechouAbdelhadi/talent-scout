"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { playerPositions } from "@/lib/constants";
import {
  Search,
  Star,
  Filter,
  MapPin,
  Calendar,
  Sliders,
  CheckCircle2,
  ChevronDown,
  BookmarkPlus,
  MessageSquare
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

// Mock player data
const players = [
  {
    id: '1',
    name: 'Marcus Johnson',
    age: 18,
    position: 'Striker',
    location: 'London, UK',
    distanceKm: 5,
    nationality: 'England',
    rating: 4.8,
    endorsements: 42,
    views: 2453,
    videoCount: 8,
    available: true,
    verified: true,
    willRelocate: true,
    skills: ['Finishing', 'Speed', 'Heading'],
    image: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    name: 'David Rodriguez',
    age: 19,
    position: 'Midfielder',
    location: 'Manchester, UK',
    distanceKm: 230,
    nationality: 'Spain',
    rating: 4.6,
    endorsements: 36,
    views: 1892,
    videoCount: 5,
    available: true,
    verified: false,
    willRelocate: true,
    skills: ['Passing', 'Vision', 'Dribbling'],
    image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '3',
    name: 'Sophie Williams',
    age: 17,
    position: 'Winger',
    location: 'Birmingham, UK',
    distanceKm: 180,
    nationality: 'England',
    rating: 4.5,
    endorsements: 28,
    views: 1654,
    videoCount: 6,
    available: false,
    verified: true,
    willRelocate: false,
    skills: ['Speed', 'Dribbling', 'Crossing'],
    image: 'https://images.pexels.com/photos/3755760/pexels-photo-3755760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '4',
    name: 'Ahmed Hassan',
    age: 20,
    position: 'Defender',
    location: 'Leeds, UK',
    distanceKm: 320,
    nationality: 'Egypt',
    rating: 4.7,
    endorsements: 34,
    views: 1789,
    videoCount: 4,
    available: true,
    verified: true,
    willRelocate: true,
    skills: ['Tackling', 'Strength', 'Positioning'],
    image: 'https://images.pexels.com/photos/5386754/pexels-photo-5386754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '5',
    name: 'Maria Silva',
    age: 18,
    position: 'Goalkeeper',
    location: 'Liverpool, UK',
    distanceKm: 270,
    nationality: 'Brazil',
    rating: 4.4,
    endorsements: 22,
    views: 1234,
    videoCount: 3,
    available: true,
    verified: false,
    willRelocate: false,
    skills: ['Reflexes', 'Positioning', 'Distribution'],
    image: 'https://images.pexels.com/photos/3222422/pexels-photo-3222422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '6',
    name: 'James Wilson',
    age: 19,
    position: 'Full-back',
    location: 'Newcastle, UK',
    distanceKm: 400,
    nationality: 'England',
    rating: 4.3,
    endorsements: 18,
    views: 1056,
    videoCount: 5,
    available: false,
    verified: true,
    willRelocate: true,
    skills: ['Speed', 'Crossing', 'Defending'],
    image: 'https://images.pexels.com/photos/6998744/pexels-photo-6998744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    positions: [],
    ageRange: [13, 30],
    distance: 500,
    availability: false,
    willRelocate: false,
    verified: false,
  });

  // Filter the players based on selected filters
  const filteredPlayers = players.filter(player => {
    // Search query filter
    if (searchQuery && !player.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Availability filter
    if (selectedFilters.availability && !player.available) {
      return false;
    }

    // Will relocate filter
    if (selectedFilters.willRelocate && !player.willRelocate) {
      return false;
    }

    // Verified filter
    if (selectedFilters.verified && !player.verified) {
      return false;
    }

    // Distance filter
    if (player.distanceKm > selectedFilters.distance) {
      return false;
    }

    // Age range filter
    if (player.age < selectedFilters.ageRange[0] || player.age > selectedFilters.ageRange[1]) {
      return false;
    }

    // Position filter
    if (selectedFilters.positions.length > 0 &&
      !selectedFilters.positions.includes(player.position.toLowerCase())) {
      return false;
    }

    return true;
  });

  const handlePositionFilter = (position: string) => {
    setSelectedFilters(prev => {
      const positions = prev.positions.includes(position)
        ? prev.positions.filter(pos => pos !== position)
        : [...prev.positions, position];

      return {
        ...prev,
        positions,
      };
    });
  };

  const handleFilterChange = (key: string, value: any) => {
    setSelectedFilters(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      positions: [],
      ageRange: [13, 30],
      distance: 500,
      availability: false,
      willRelocate: false,
      verified: false,
    });
    setSearchQuery("");
  };

  const activeFilterCount = (
    (selectedFilters.positions.length > 0 ? 1 : 0) +
    (selectedFilters.distance < 500 ? 1 : 0) +
    (selectedFilters.ageRange[0] > 13 || selectedFilters.ageRange[1] < 30 ? 1 : 0) +
    (selectedFilters.availability ? 1 : 0) +
    (selectedFilters.willRelocate ? 1 : 0) +
    (selectedFilters.verified ? 1 : 0)
  );

  return (
    <div className="container py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Discover Players</h1>
        <p className="text-muted-foreground">
          Find and connect with amateur football talent from around the world
        </p>
      </div>

      <div className="lg:flex gap-6">
        {/* Filters - Desktop */}
        <div className="hidden lg:block w-72 space-y-6">
          <div className="border rounded-lg p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Filters</h3>
              <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                Clear all
              </Button>
            </div>

            <Accordion type="single" collapsible className="w-full" defaultValue="position">
              <AccordionItem value="position" className="border-b-0">
                <AccordionTrigger className="py-2">
                  <span className="flex items-center gap-2 text-sm font-medium">
                    Position
                    {selectedFilters.positions.length > 0 && (
                      <Badge variant="outline" className="rounded-full ml-2">
                        {selectedFilters.positions.length}
                      </Badge>
                    )}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 gap-2">
                    {['Goalkeeper', 'Defender', 'Midfielder', 'Striker', 'Winger', 'Full-back'].map((position) => (
                      <div key={position} className="flex items-center space-x-2">
                        <Checkbox
                          id={`position-${position}`}
                          checked={selectedFilters.positions.includes(position.toLowerCase())}
                          onCheckedChange={() => handlePositionFilter(position.toLowerCase())}
                        />
                        <label
                          htmlFor={`position-${position}`}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {position}
                        </label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="age" className="border-b-0">
                <AccordionTrigger className="py-2">
                  <span className="flex items-center gap-2 text-sm font-medium">
                    Age
                    {(selectedFilters.ageRange[0] > 13 || selectedFilters.ageRange[1] < 30) && (
                      <Badge variant="outline" className="rounded-full ml-2">
                        {selectedFilters.ageRange[0]}-{selectedFilters.ageRange[1]}
                      </Badge>
                    )}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <Slider
                      defaultValue={selectedFilters.ageRange}
                      min={13}
                      max={30}
                      step={1}
                      onValueChange={(value) => handleFilterChange('ageRange', value)}
                    />
                    <div className="flex justify-between text-sm">
                      <span>{selectedFilters.ageRange[0]} years</span>
                      <span>{selectedFilters.ageRange[1]} years</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="location" className="border-b-0">
                <AccordionTrigger className="py-2">
                  <span className="flex items-center gap-2 text-sm font-medium">
                    Distance
                    {selectedFilters.distance < 500 && (
                      <Badge variant="outline" className="rounded-full ml-2">
                        {selectedFilters.distance} km
                      </Badge>
                    )}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <Slider
                      defaultValue={[selectedFilters.distance]}
                      min={5}
                      max={500}
                      step={5}
                      onValueChange={(value) => handleFilterChange('distance', value[0])}
                    />
                    <div className="flex justify-between text-sm">
                      <span>{selectedFilters.distance} km</span>
                      <span>{selectedFilters.distance === 500 ? "Any" : `${selectedFilters.distance} km`}</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="availability" className="border-b-0">
                <AccordionTrigger className="py-2">
                  <span className="flex items-center gap-2 text-sm font-medium">
                    Availability
                    {(selectedFilters.availability || selectedFilters.willRelocate || selectedFilters.verified) && (
                      <Badge variant="outline" className="rounded-full ml-2">
                        {(selectedFilters.availability ? 1 : 0) +
                          (selectedFilters.willRelocate ? 1 : 0) +
                          (selectedFilters.verified ? 1 : 0)}
                      </Badge>
                    )}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="available-for-trials"
                        checked={selectedFilters.availability}
                        onCheckedChange={(checked) =>
                          handleFilterChange('availability', checked)
                        }
                      />
                      <label
                        htmlFor="available-for-trials"
                        className="text-sm leading-none"
                      >
                        Available for trials
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="willing-to-relocate"
                        checked={selectedFilters.willRelocate}
                        onCheckedChange={(checked) =>
                          handleFilterChange('willRelocate', checked)
                        }
                      />
                      <label
                        htmlFor="willing-to-relocate"
                        className="text-sm leading-none"
                      >
                        Willing to relocate
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="verified"
                        checked={selectedFilters.verified}
                        onCheckedChange={(checked) =>
                          handleFilterChange('verified', checked)
                        }
                      />
                      <label
                        htmlFor="verified"
                        className="text-sm leading-none"
                      >
                        Verified players
                      </label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="flex-1">
          {/* Search and mobile filters */}
          <div className="flex gap-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search players by name..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Filter className="h-4 w-4" />
                  {activeFilterCount > 0 && (
                    <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                      {activeFilterCount}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Narrow down players based on your requirements
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <Accordion type="single" collapsible className="w-full" defaultValue="position">
                    <AccordionItem value="position" className="border-b">
                      <AccordionTrigger>Position</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-2 gap-2">
                          {['Goalkeeper', 'Defender', 'Midfielder', 'Striker', 'Winger', 'Full-back'].map((position) => (
                            <div key={position} className="flex items-center space-x-2">
                              <Checkbox
                                id={`mobile-position-${position}`}
                                checked={selectedFilters.positions.includes(position.toLowerCase())}
                                onCheckedChange={() => handlePositionFilter(position.toLowerCase())}
                              />
                              <label
                                htmlFor={`mobile-position-${position}`}
                                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {position}
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="age" className="border-b">
                      <AccordionTrigger>Age</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          <Slider
                            defaultValue={selectedFilters.ageRange}
                            min={13}
                            max={30}
                            step={1}
                            onValueChange={(value) => handleFilterChange('ageRange', value)}
                          />
                          <div className="flex justify-between text-sm">
                            <span>{selectedFilters.ageRange[0]} years</span>
                            <span>{selectedFilters.ageRange[1]} years</span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="location" className="border-b">
                      <AccordionTrigger>Distance</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          <Slider
                            defaultValue={[selectedFilters.distance]}
                            min={5}
                            max={500}
                            step={5}
                            onValueChange={(value) => handleFilterChange('distance', value[0])}
                          />
                          <div className="flex justify-between text-sm">
                            <span>{selectedFilters.distance} km</span>
                            <span>{selectedFilters.distance === 500 ? "Any" : `${selectedFilters.distance} km`}</span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="availability" className="border-b">
                      <AccordionTrigger>Availability</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="mobile-available-for-trials"
                              checked={selectedFilters.availability}
                              onCheckedChange={(checked) =>
                                handleFilterChange('availability', checked)
                              }
                            />
                            <label
                              htmlFor="mobile-available-for-trials"
                              className="text-sm leading-none"
                            >
                              Available for trials
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="mobile-willing-to-relocate"
                              checked={selectedFilters.willRelocate}
                              onCheckedChange={(checked) =>
                                handleFilterChange('willRelocate', checked)
                              }
                            />
                            <label
                              htmlFor="mobile-willing-to-relocate"
                              className="text-sm leading-none"
                            >
                              Willing to relocate
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="mobile-verified"
                              checked={selectedFilters.verified}
                              onCheckedChange={(checked) =>
                                handleFilterChange('verified', checked)
                              }
                            />
                            <label
                              htmlFor="mobile-verified"
                              className="text-sm leading-none"
                            >
                              Verified players
                            </label>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Button
                    variant="outline"
                    className="w-full mt-4"
                    onClick={clearAllFilters}
                  >
                    Clear all filters
                  </Button>
                </div>
              </SheetContent>
            </Sheet>

            <Select defaultValue="relevance">
              <SelectTrigger className="w-[150px] hidden sm:flex">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="endorsements">Most Endorsed</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="distance">Nearest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Active filters display */}
          {activeFilterCount > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-sm text-muted-foreground">Active filters:</span>

              {selectedFilters.positions.length > 0 && (
                <Badge variant="secondary" className="gap-1 rounded-full">
                  <span>Positions: {selectedFilters.positions.length}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 p-0 hover:bg-transparent"
                    onClick={() => handleFilterChange('positions', [])}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              )}

              {(selectedFilters.ageRange[0] > 13 || selectedFilters.ageRange[1] < 30) && (
                <Badge variant="secondary" className="gap-1 rounded-full">
                  <span>Age: {selectedFilters.ageRange[0]}-{selectedFilters.ageRange[1]}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 p-0 hover:bg-transparent"
                    onClick={() => handleFilterChange('ageRange', [13, 30])}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              )}

              {selectedFilters.distance < 500 && (
                <Badge variant="secondary" className="gap-1 rounded-full">
                  <span>Distance: {selectedFilters.distance} km</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 p-0 hover:bg-transparent"
                    onClick={() => handleFilterChange('distance', 500)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              )}

              {selectedFilters.availability && (
                <Badge variant="secondary" className="gap-1 rounded-full">
                  <span>Available for trials</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 p-0 hover:bg-transparent"
                    onClick={() => handleFilterChange('availability', false)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              )}

              {selectedFilters.willRelocate && (
                <Badge variant="secondary" className="gap-1 rounded-full">
                  <span>Will relocate</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 p-0 hover:bg-transparent"
                    onClick={() => handleFilterChange('willRelocate', false)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              )}

              {selectedFilters.verified && (
                <Badge variant="secondary" className="gap-1 rounded-full">
                  <span>Verified only</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 p-0 hover:bg-transparent"
                    onClick={() => handleFilterChange('verified', false)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              )}

              <Button
                variant="ghost"
                size="sm"
                className="text-xs h-7"
                onClick={clearAllFilters}
              >
                Clear all
              </Button>
            </div>
          )}

          {/* Results count */}
          <p className="text-sm text-muted-foreground mb-4">
            Showing {filteredPlayers.length} player{filteredPlayers.length !== 1 ? 's' : ''}
          </p>

          {/* Player cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPlayers.length > 0 ? (
              filteredPlayers.map((player) => (
                <Link href={`/player/${player.id}`} key={player.id}>
                  <Card className="overflow-hidden hover:shadow-md transition-shadow h-full">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={player.image}
                        alt={player.name}
                        fill
                        className="object-cover"
                      />
                      {player.verified && (
                        <div className="absolute top-2 right-2">
                          <Badge variant="secondary" className="gap-1 rounded-full bg-background/80 backdrop-blur-sm">
                            <CheckCircle2 className="h-3 w-3 text-primary" />
                            <span>Verified</span>
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{player.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {player.position} • {player.age} years
                          </p>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>{player.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 bg-muted/50 px-2 py-1 rounded-full">
                          <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                          <span className="text-sm font-medium">{player.rating}</span>
                        </div>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-1">
                        {player.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <Separator className="my-3" />

                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{player.videoCount} videos</span>
                        <span>{player.endorsements} endorsements</span>
                        <span>{player.views} views</span>
                      </div>

                      <div className="mt-3 flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 gap-1 text-xs">
                          <BookmarkPlus className="h-3.5 w-3.5" />
                          <span>Shortlist</span>
                        </Button>
                        <Button size="sm" className="flex-1 gap-1 text-xs">
                          <MessageSquare className="h-3.5 w-3.5" />
                          <span>Contact</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <div className="mx-auto w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Search className="h-10 w-10 text-muted-foreground/60" />
                </div>
                <h3 className="text-lg font-medium">No players found</h3>
                <p className="text-muted-foreground mt-1 max-w-md mx-auto">
                  Try adjusting your search filters to find more players that match your criteria.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={clearAllFilters}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}