echo "enter the value of a"
read a
if [ $a -lt 90 ]
then
	echo " A+"
elif [ $a -lt 80 ] 
then
	echo " B+ "
elif [ $a -lt 70 ]
then
	echo " C+ "
else 
	echo " fail "
fi
