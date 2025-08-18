# Build stage
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["YARP/WebsiteUpgrade.ceproj", "YARP/"]
COPY YARP/ .
RUN dotnet restore "YARP/WebsiteUpgrade.ceproj"
RUN dotnet publish "YARP/WebsiteUpgrade.ceproj" -c Release -o /app/publish

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "WebsiteUpgrade.dll"]
